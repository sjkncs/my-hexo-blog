---
title: 深圳住宅更新：先把数据与研究边界讲清楚
date: 2026-10-14 12:00:00
updated: 2026-10-14 12:00:00
permalink: 2026/10/14/shenzhen-research-notes/
tags: [城市更新, 深圳, 空间数据, 计量经济学]
categories: [研究笔记]
cover: /img/research-event-study.png
description: 从全市交易覆盖到罗湖片区诊断，记录项目识别前需要核定的数据、空间身份与推断边界。
---

## 为什么先谈证据，而不是效果

住宅拆除重建不仅改变建筑，还可能改变周边服务、交通和供应预期。想研究既有住宅价格如何响应，需要先区分三个层次：交易来源是否覆盖研究窗口、片区比较反映了什么，以及住宅能否被可靠地归属到具体项目周边。

本文是 2026 年 10 月 14 日的研究进度记录，不是论文成果公告。代码、来源清单和后续更新以[研究仓库](https://github.com/sjkncs/shenzhen-housing-redevelopment)为准。

<!-- more -->

## 从全市覆盖到罗湖样本

现有平台来源包含 139,514 条原始交易，规则清洗后为 132,774 条；罗湖清洗样本为 16,199 条、621 个小区。它们是平台样本，不是官方成交普查。现有小区级交易来源止于 2024 年 4 月 25 日，行政区日度成交量不能替代项目附近的住宅价格。

[全市覆盖摘要](https://github.com/sjkncs/shenzhen-housing-redevelopment/blob/main/scopes/shenzhen/summary/coverage.json)记录了数量、来源哈希和时间范围。缺失记录不直接填零，不用更大范围的数据量代表项目识别已经完成。

## 片区诊断能告诉我们什么

当前罗湖试算比较来源中的翠竹商圈与其他商圈。住房特征调整后，主模型使用 10,867 笔交易、607 个小区；事后交互系数为 0.1606，对应相对差异约 17.42%。

但是，事件前联合检验已经显示明显差异。图中的事件前路径、单一处理商圈的共同冲击，以及尚未核定的空间边界，都限制了这个结果的解释。因此不能把这个数字称为木头龙项目的因果效应。

图中为公开仓库封存的真实事件研究，参照期是 2019Q4，2021Q4 处理组缺失观测未插值。[动态系数与运行摘要](https://github.com/sjkncs/shenzhen-housing-redevelopment/tree/main/scopes/luohu/outputs/price_did_audit_20261003)提供完整核查入口。

## 下一步的关口

当前重点是核定木头龙的坐标依据、拆除范围、分期事件和既有住宅身份，再构造比较样本。补充项目线索不等于已经接受的空间处理样本；测试通过也不等于平行趋势或识别成立。

较新的区级市场统计仍需说明缺日、区名口径和统计粒度。它可以支持背景描述，不能自动补齐小区级长期价格面板。研究的每一层证据都需要保留自己的来源与边界。

## 可复现入口

- [研究设计](https://github.com/sjkncs/shenzhen-housing-redevelopment/blob/main/docs/RESEARCH_DESIGN.md)
- [复现指南](https://github.com/sjkncs/shenzhen-housing-redevelopment/blob/main/docs/REPRODUCTION.md)
- [数据来源与使用条件](https://github.com/sjkncs/shenzhen-housing-redevelopment/blob/main/docs/DATA_ACCESS.md)

原始输入、汇总诊断与正式因果证据是不同的产物。把它们分清楚，才有可能在后续工作中做出可解释、可核查的比较。
