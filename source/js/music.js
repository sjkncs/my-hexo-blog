/* Load third-party music only after a visitor asks; always keep the source link. */
(() => {
  document.querySelectorAll('.music-widget').forEach(widget => {
    const button = widget.querySelector('button');
    const status = widget.querySelector('[role="status"]');
    let player;
    button.addEventListener('click', async () => {
      if (player) return;
      button.disabled = true;
      status.textContent = '正在加载歌单…';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      try {
        if (typeof APlayer === 'undefined') throw new Error('player');
        const params = new URLSearchParams({server: widget.dataset.server, type: widget.dataset.type, id: widget.dataset.id});
        const response = await fetch('https://api.i-meto.com/meting/api?' + params, {signal: controller.signal});
        if (!response.ok) throw new Error('service');
        const tracks = await response.json();
        const safeTracks = Array.isArray(tracks) ? tracks.filter(track => typeof track.url === 'string' && track.url.startsWith('https://')) : [];
        if (!safeTracks.length) throw new Error('empty');
        player = new APlayer({container: widget.querySelector('.music-widget-player'), audio: safeTracks,
          autoplay: false, preload: 'none', mutex: true, theme: '#28685c', listMaxHeight: '340px', lrcType: safeTracks.some(track => track.lrc) ? 3 : 0});
        status.textContent = '歌单已载入，请点击播放；曲目可用性由音乐平台决定。';
        player.on('error', () => { status.textContent = '此音频暂时无法播放，请通过下方原站链接收听。'; });
        button.hidden = true;
      } catch (error) {
        status.textContent = '歌单服务暂时不可用，可以重试或通过原站链接收听。';
        button.textContent = '重试加载';
      } finally {
        clearTimeout(timeout);
        button.disabled = false;
      }
    });
  });
})();
