

/**
 * @description 获取版本详情 buildResAnyTyped
 * @url /admin/app/version/detail
 */
export type OAdminAppVersionDetailGet = {
}

/**
 * @description 删除版本 buildResAnyTyped
 * @url /admin/app/version/{x}
 */
export type OAdminAppVersionIdDelete = {
}

/**
 * @description 获取版本列表 buildResAnyTyped
 * @url /admin/app/version/list
 */
export type OAdminAppVersionListGet = {
}

/**
 * @description 获取版本号 buildResAnyTyped
 * @url /admin/app/version/name
 */
export type OAdminAppVersionNameGet = {
}

/**
 * @description 添加版本 buildResAnyTyped
 * @url /admin/app/version
 */
export type OAdminAppVersionPost = {
}

/**
 * @description 修改版本 buildResAnyTyped
 * @url /admin/app/version
 */
export type OAdminAppVersionPut = {
}

/**
 * @description 获取渠道详情 buildResAnyTyped
 * @url /admin/channel/{x}
 */
export type OAdminChannelIdGet = {
}

/**
 * @description 获取渠道列表 buildResAnyTyped
 * @url /admin/channel/list
 */
export type OAdminChannelListGet = {
}

/**
 * @description 添加渠道 buildResAnyTyped
 * @url /admin/channel
 */
export type OAdminChannelPost = {
}

/**
 * @description 编辑渠道 buildResAnyTyped
 * @url /admin/channel
 */
export type OAdminChannelPut = {
}

/**
 * @description 重置密码 buildResAnyTyped
 * @url /admin/channel/resetPassword
 */
export type OAdminChannelResetPasswordPut = {
}

/**
 * @description 生成图形验证码 buildResAnyTyped
 * @url /admin/common/captchaImage
 */
export type OAdminCommonCaptchaImageGet = {
}

/**
 * @description 通过父id获取下级列表 buildResArrayTyped
 * @url /admin/common/country/children/{x}
 */
export type OAdminCommonCountryChildrenParentIdGetItem = {
	aliasName: string;
	ancestors: string;
	childrenList: array;
	chName: string;
	createBy: string;
	createById: number;
	createTime: string;
	enName: string;
	id: number;
	parentId: number;
	phoneCode: string;
	remark: string;
	sort: number;
	updateBy: string;
	updateById: number;
	updateTime: string;  
}

/**
 * @description 获取所有国家 buildResArrayTyped
 * @url /admin/common/country/list
 */
export type OAdminCommonCountryListGetItem = {
	aliasName: string;
	ancestors: string;
	childrenList: array;
	chName: string;
	createBy: string;
	createById: number;
	createTime: string;
	enName: string;
	id: number;
	parentId: number;
	phoneCode: string;
	remark: string;
	sort: number;
	updateBy: string;
	updateById: number;
	updateTime: string;  
}

/**
 * @description 获取来源统计数据 buildResAnyTyped
 * @url /admin/console/chart/origin
 */
export type OAdminConsoleChartOriginGet = {
}

/**
 * @description 获取公海日期统计数据 buildResAnyTyped
 * @url /admin/console/chart/seaDay
 */
export type OAdminConsoleChartSeaDayGet = {
}

/**
 * @description 获取公海统计数据 buildResAnyTyped
 * @url /admin/console/chart/sea
 */
export type OAdminConsoleChartSeaGet = {
}

/**
 * @description 获取签单排行榜 buildResAnyTyped
 * @url /admin/console/conclude/rank/{x}
 */
export type OAdminConsoleConcludeRankTypeGet = {
}

/**
 * @description 获取控制台统计信息 buildResAnyTyped
 * @url /admin/console/statistics/info
 */
export type OAdminConsoleStatisticsInfoGet = {
}

/**
 * @description 设置合同 buildResAnyTyped
 * @url /admin/contract/attrRef
 */
export type OAdminContractAttrRefPost = {
}

/**
 * @description 删除合同 buildResAnyTyped
 * @url /admin/contract/{x}
 */
export type OAdminContractIdDelete = {
}

/**
 * @description 合同详情 buildResAnyTyped
 * @url /admin/contract/{x}
 */
export type OAdminContractIdGet = {
}

/**
 * @description 合同列表 buildResAnyTyped
 * @url /admin/contract/list
 */
export type OAdminContractListGet = {
}

/**
 * @description 新增合同 buildResAnyTyped
 * @url /admin/contract
 */
export type OAdminContractPost = {
}

/**
 * @description 编辑合同 buildResAnyTyped
 * @url /admin/contract
 */
export type OAdminContractPut = {
}

/**
 * @description 删除账户 buildResAnyTyped
 * @url /admin/corporate/account/{x}
 */
export type OAdminCorporateAccountIdDelete = {
}

/**
 * @description 账户详情 buildResAnyTyped
 * @url /admin/corporate/account/{x}
 */
export type OAdminCorporateAccountIdGet = {
}

/**
 * @description 账户列表 buildResAnyTyped
 * @url /admin/corporate/account/list
 */
export type OAdminCorporateAccountListGet = {
}

/**
 * @description 添加账户 buildResAnyTyped
 * @url /admin/corporate/account
 */
export type OAdminCorporateAccountPost = {
}

/**
 * @description 编辑账户 buildResAnyTyped
 * @url /admin/corporate/account
 */
export type OAdminCorporateAccountPut = {
}

/**
 * @description 优惠券详情 buildResAnyTyped
 * @url /admin/coupon/{x}
 */
export type OAdminCouponIdGet = {
}

/**
 * @description 优惠券投资者列表 buildResAnyTyped
 * @url /admin/coupon/investor/list
 */
export type OAdminCouponInvestorListGet = {
}

/**
 * @description 优惠券列表 buildResAnyTyped
 * @url /admin/coupon/list
 */
export type OAdminCouponListGet = {
}

/**
 * @description 新增优惠券 buildResAnyTyped
 * @url /admin/coupon
 */
export type OAdminCouponPost = {
}

/**
 * @description 编辑优惠券 buildResAnyTyped
 * @url /admin/coupon
 */
export type OAdminCouponPut = {
}

/**
 * @description 优惠券发送投资者 buildResAnyTyped
 * @url /admin/coupon/send/investor
 */
export type OAdminCouponSendInvestorPost = {
}

/**
 * @description 优惠券核销 buildResAnyTyped
 * @url /admin/coupon/writeoff
 */
export type OAdminCouponWriteoffPost = {
}

/**
 * @description 关联订单 buildResAnyTyped
 * @url /admin/deposit/investor/order/list
 */
export type OAdminDepositInvestorOrderListGet = {
}

/**
 * @description 查询充值列表 buildResArrayTyped
 * @url /admin/deposit/list
 */
export type OAdminDepositListGetItem = {  
}

/**
 * @description 充值 手动入金 buildResAnyTyped
 * @url /admin/deposit
 */
export type OAdminDepositPost = {
}

/**
 * @description 获取部门分配规则 buildResAnyTyped
 * @url /admin/dept/allocation/rule
 */
export type OAdminDeptAllocationRuleGet = {
}

/**
 * @description 添加/编辑部门分配规则 buildResAnyTyped
 * @url /admin/dept/allocation/rule
 */
export type OAdminDeptAllocationRulePost = {
}

/**
 * @description 删除部门 buildResAnyTyped
 * @url /admin/dept/{x}
 */
export type OAdminDeptIdDelete = {
}

/**
 * @description 查询部门详情 buildResAnyTyped
 * @url /admin/dept/{x}
 */
export type OAdminDeptIdGet = {
}

/**
 * @description 查询部门列表 buildResAnyTyped
 * @url /admin/dept/list
 */
export type OAdminDeptListGet = {
}

/**
 * @description 新增部门 buildResAnyTyped
 * @url /admin/dept
 */
export type OAdminDeptPost = {
}

/**
 * @description 编辑部门 buildResAnyTyped
 * @url /admin/dept
 */
export type OAdminDeptPut = {
}

/**
 * @description 克隆流程 buildResAnyTyped
 * @url /admin/flow/clone
 */
export type OAdminFlowClonePost = {
}

/**
 * @description 删除流程 buildResAnyTyped
 * @url /admin/flow/{x}
 */
export type OAdminFlowIdDelete = {
}

/**
 * @description 流程详情 buildResAnyTyped
 * @url /admin/flow/{x}
 */
export type OAdminFlowIdGet = {
}

/**
 * @description 流程列表 buildResAnyTyped
 * @url /admin/flow/list
 */
export type OAdminFlowListGet = {
}

/**
 * @description 新增模版 buildResAnyTyped
 * @url /admin/flow
 */
export type OAdminFlowPost = {
}

/**
 * @description 编辑模版 buildResAnyTyped
 * @url /admin/flow
 */
export type OAdminFlowPut = {
}

/**
 * @description 基金详情 buildResAnyTyped
 * @url /admin/fund/{x}
 */
export type OAdminFundIdGet = {
}

/**
 * @description 基金列表 buildResAnyTyped
 * @url /admin/fund/list
 */
export type OAdminFundListGet = {
}

/**
 * @description 新增基金 buildResAnyTyped
 * @url /admin/fund
 */
export type OAdminFundPost = {
}

/**
 * @description 编辑基金 buildResAnyTyped
 * @url /admin/fund
 */
export type OAdminFundPut = {
}

/**
 * @description 基金类型列表 buildResAnyTyped
 * @url /admin/fund/type/list
 */
export type OAdminFundTypeListGet = {
}

/**
 * @description 获取用户信息 buildResAnyTyped
 * @url /admin/info
 */
export type OAdminInfoGet = {
}

/**
 * @description 获取邀请的用户 buildResAnyTyped
 * @url /admin/investor/invitee/list
 */
export type OAdminInvestorInviteeListGet = {
}

/**
 * @description 获取投资者列表 buildResArrayTyped
 * @url /admin/investor/list
 */
export type OAdminInvestorListGetItem = {  
}

/**
 * @description 获取投资者订单列表 buildResAnyTyped
 * @url /admin/investor/order/list
 */
export type OAdminInvestorOrderListGet = {
}

/**
 * @description 获取投资者已有的权限 buildResAnyTyped
 * @url /admin/investor/product/relevant/list
 */
export type OAdminInvestorProductRelevantListGet = {
}

/**
 * @description 分配投资者权限 buildResAnyTyped
 * @url /admin/investor/product/relevant
 */
export type OAdminInvestorProductRelevantPost = {
}

/**
 * @description 新增投资者 buildResAnyTyped
 * @url /admin/investor/record/add
 */
export type OAdminInvestorRecordAddPost = {
}

/**
 * @description 获取投资者基本信息 buildResAnyTyped
 * @url /admin/investor/record/basic
 */
export type OAdminInvestorRecordBasicGet = {
}

/**
 * @description 更新投资者基本信息 buildResAnyTyped
 * @url /admin/investor/record/update
 */
export type OAdminInvestorRecordUpdatePut = {
}

/**
 * @description 重发密码文件 buildResAnyTyped
 * @url /admin/investor/repeatPwdEmail
 */
export type OAdminInvestorRepeatPwdEmailPost = {
}

/**
 * @description 投资者token buildResAnyTyped
 * @url /admin/investor/token
 */
export type OAdminInvestorTokenPost = {
}

/**
 * @description 获取投资者银行信息 buildResAnyTyped
 * @url /admin/investor/wallet/bank/account
 */
export type OAdminInvestorWalletBankAccountGet = {
}

/**
 * @description 保存投资者银行卡信息 buildResAnyTyped
 * @url /admin/investor/wallet/bank/account
 */
export type OAdminInvestorWalletBankAccountPost = {
}

/**
 * @description 获取投资者投资记录 buildResAnyTyped
 * @url /admin/investor/wallet/deposit/list
 */
export type OAdminInvestorWalletDepositListGet = {
}

/**
 * @description 获取投资者资产详情 buildResAnyTyped
 * @url /admin/investor/wallet/info/{x}
 */
export type OAdminInvestorWalletInfoIdGet = {
}

/**
 * @description 获取投资者订单支付记录 buildResAnyTyped
 * @url /admin/investor/wallet/orderpay/list
 */
export type OAdminInvestorWalletOrderpayListGet = {
}

/**
 * @description 获取投资者反俑记录 buildResAnyTyped
 * @url /admin/investor/wallet/rebate/list
 */
export type OAdminInvestorWalletRebateListGet = {
}

/**
 * @description 规则详情 buildResAnyTyped
 * @url /admin/invitation/rule
 */
export type OAdminInvitationRuleGet = {
}

/**
 * @description 添加规则 buildResAnyTyped
 * @url /admin/invitation/rule
 */
export type OAdminInvitationRulePost = {
}

/**
 * @description 登录 buildResAnyTyped
 * @url /admin/login
 */
export type OAdminLoginPost = {
	googleCode: boolean; // 绑定谷歌验证并已开启谷歌二次验证；该字段返回true则表示在登录时需要填写谷歌验证码，此时token不会返回。
}

/**
 * @description 素材查重 buildResAnyTyped
 * @url /admin/material/exist
 */
export type OAdminMaterialExistGet = {
}

/**
 * @description 删除素材 buildResAnyTyped
 * @url /admin/material/{x}
 */
export type OAdminMaterialIdDelete = {
}

/**
 * @description 素材列表 buildResAnyTyped
 * @url /admin/material/list
 */
export type OAdminMaterialListGet = {
}

/**
 * @description 修改素材 buildResAnyTyped
 * @url /admin/material
 */
export type OAdminMaterialPut = {
}

/**
 * @description 恢复素材 buildResAnyTyped
 * @url /admin/material/recover
 */
export type OAdminMaterialRecoverPost = {
}

/**
 * @description 素材列表-已删除的 buildResAnyTyped
 * @url /admin/material/recycle/list
 */
export type OAdminMaterialRecycleListGet = {
}

/**
 * @description 删除标签 buildResAnyTyped
 * @url /admin/material/tag/{x}
 */
export type OAdminMaterialTagIdDelete = {
}

/**
 * @description 查询标签列表-全部 buildResAnyTyped
 * @url /admin/material/tag/list/all
 */
export type OAdminMaterialTagListAllGet = {
}

/**
 * @description 查询标签列表 buildResAnyTyped
 * @url /admin/material/tag/list
 */
export type OAdminMaterialTagListGet = {
}

/**
 * @description 添加标签 buildResAnyTyped
 * @url /admin/material/tag
 */
export type OAdminMaterialTagPost = {
}

/**
 * @description 编辑标签 buildResAnyTyped
 * @url /admin/material/tag
 */
export type OAdminMaterialTagPut = {
}

/**
 * @description 上传素材 buildResAnyTyped
 * @url /admin/material/upload
 */
export type OAdminMaterialUploadPost = {
}

/**
 * @description 查询菜单列表 buildResArrayTyped
 * @url /admin/menu/list
 */
export type OAdminMenuListGetItem = {  
}

/**
 * @description 删除菜单 buildResAnyTyped
 * @url /admin/menu/{x}
 */
export type OAdminMenuMenuIdDelete = {
}

/**
 * @description 查询菜单详情 buildResAnyTyped
 * @url /admin/menu/{x}
 */
export type OAdminMenuMenuIdGet = {
}

/**
 * @description 新增菜单 buildResAnyTyped
 * @url /admin/menu
 */
export type OAdminMenuPost = {
}

/**
 * @description 修改菜单 buildResAnyTyped
 * @url /admin/menu
 */
export type OAdminMenuPut = {
}

/**
 * @description 获取菜单信息 buildResArrayTyped
 * @url /admin/menus
 */
export type OAdminMenusGetItem = {  
}

/**
 * @description 删除通知 buildResAnyTyped
 * @url /admin/notification/{x}
 */
export type OAdminNotificationIdDelete = {
}

/**
 * @description 查询通知详情 buildResAnyTyped
 * @url /admin/notification/{x}
 */
export type OAdminNotificationIdGet = {
}

/**
 * @description 查询通知列表 buildResAnyTyped
 * @url /admin/notification/list
 */
export type OAdminNotificationListGet = {
}

/**
 * @description 新增通知 buildResAnyTyped
 * @url /admin/notification
 */
export type OAdminNotificationPost = {
}

/**
 * @description 修改订单基本信息 buildResAnyTyped
 * @url /admin/order/basic/info
 */
export type OAdminOrderBasicInfoPut = {
}

/**
 * @description 绑定中介 buildResAnyTyped
 * @url /admin/order/broker/bind
 */
export type OAdminOrderBrokerBindPost = {
}

/**
 * @description 查询订单中介列表 buildResArrayTyped
 * @url /admin/order/broker/list
 */
export type OAdminOrderBrokerListGetItem = {  
}

/**
 * @description 取消订单 buildResAnyTyped
 * @url /admin/order/cancel
 */
export type OAdminOrderCancelPost = {
}

/**
 * @description 绑定文案 buildResAnyTyped
 * @url /admin/order/copywriting/bind
 */
export type OAdminOrderCopywritingBindPost = {
}

/**
 * @description 查询订单文案列表 buildResArrayTyped
 * @url /admin/order/copywriting/list
 */
export type OAdminOrderCopywritingListGetItem = {  
}

/**
 * @description 创建订单 buildResAnyTyped
 * @url /admin/order/create
 */
export type OAdminOrderCreatePost = {
}

/**
 * @description 绑定客服 buildResAnyTyped
 * @url /admin/order/customer/bind
 */
export type OAdminOrderCustomerBindPost = {
}

/**
 * @description 查询订单客服列表 buildResArrayTyped
 * @url /admin/order/customer/list
 */
export type OAdminOrderCustomerListGetItem = {  
}

/**
 * @description 绑定律师 buildResAnyTyped
 * @url /admin/order/lawyer/bind
 */
export type OAdminOrderLawyerBindPost = {
}

/**
 * @description 查询订单律师列表 buildResArrayTyped
 * @url /admin/order/lawyer/list
 */
export type OAdminOrderLawyerListGetItem = {  
}

/**
 * @description 查询订单列表 buildResArrayTyped
 * @url /admin/order/list
 */
export type OAdminOrderListGetItem = {  
}

/**
 * @description 获取订单详情 buildResAnyTyped
 * @url /admin/order/{x}
 */
export type OAdminOrderOrderNoGet = {
}

/**
 * @description 订单支付记录 buildResAnyTyped
 * @url /admin/order/pay/list
 */
export type OAdminOrderPayListGet = {
}

/**
 * @description 隐藏/显示阶段 buildResAnyTyped
 * @url /admin/order/phase/status
 */
export type OAdminOrderPhaseStatusPost = {
}

/**
 * @description 绑定产品 buildResAnyTyped
 * @url /admin/order/product/bind
 */
export type OAdminOrderProductBindPost = {
}

/**
 * @description 修改订单 buildResAnyTyped
 * @url /admin/order/step
 */
export type OAdminOrderStepPut = {
}

/**
 * @description 删除订单组件内容(子订单) buildResAnyTyped
 * @url /admin/order/sub/content/{x}/{x}
 */
export type OAdminOrderSubContentComponentIdOrderSubIdDelete = {
}

/**
 * @description 添加订单组件内容(子订单) buildResAnyTyped
 * @url /admin/order/sub/content
 */
export type OAdminOrderSubContentPost = {
}

/**
 * @description 修改订单组件内容(子订单) buildResAnyTyped
 * @url /admin/order/sub/content
 */
export type OAdminOrderSubContentPut = {
}

/**
 * @description 修改阶段/组件标题 buildResAnyTyped
 * @url /admin/order/sub/title
 */
export type OAdminOrderSubTitlePut = {
}

/**
 * @description 审核订单组件内容(子订单) buildResAnyTyped
 * @url /admin/order/sub/verify
 */
export type OAdminOrderSubVerifyPost = {
}

/**
 * @description 钱包内交易（目前只允许操作投资者的项目钱包） buildResAnyTyped
 * @url /admin/order/transfer/inside
 */
export type OAdminOrderTransferInsidePost = {
}

/**
 * @description 获取钱包内交易资金类型列表 buildResArrayTyped
 * @url /admin/order/transfer/inside/type/list
 */
export type OAdminOrderTransferInsideTypeListGetItem = {  
}

/**
 * @description 获取订单投资记录 buildResAnyTyped
 * @url /admin/order/wallet/deposit/list
 */
export type OAdminOrderWalletDepositListGet = {
}

/**
 * @description 获取项目钱包详情 buildResAnyTyped
 * @url /admin/order/wallet
 */
export type OAdminOrderWalletGet = {
}

/**
 * @description 获取投资者订单支付记录 buildResAnyTyped
 * @url /admin/order/wallet/orderpay/list
 */
export type OAdminOrderWalletOrderpayListGet = {
}

/**
 * @description 来源详情 buildResAnyTyped
 * @url /admin/origin/{x}
 */
export type OAdminOriginIdGet = {
}

/**
 * @description 来源列表 buildResAnyTyped
 * @url /admin/origin/list
 */
export type OAdminOriginListGet = {
}

/**
 * @description 添加来源 buildResAnyTyped
 * @url /admin/origin
 */
export type OAdminOriginPost = {
}

/**
 * @description 编辑来源 buildResAnyTyped
 * @url /admin/origin
 */
export type OAdminOriginPut = {
}

/**
 * @description 产品绑定/换绑流程 buildResAnyTyped
 * @url /admin/product/bind/flow
 */
export type OAdminProductBindFlowPost = {
}

/**
 * @description 编辑产品详情内容 buildResAnyTyped
 * @url /admin/product/content
 */
export type OAdminProductContentPut = {
}

/**
 * @description 获取产品下所有流程 buildResAnyTyped
 * @url /admin/product/flow/alllist
 */
export type OAdminProductFlowAlllistGet = {
}

/**
 * @description 获取产品下的流程 buildResAnyTyped
 * @url /admin/product/flow/list
 */
export type OAdminProductFlowListGet = {
}

/**
 * @description 删除产品 buildResAnyTyped
 * @url /admin/product/{x}
 */
export type OAdminProductIdDelete = {
}

/**
 * @description 获取产品详情 buildResAnyTyped
 * @url /admin/product/{x}
 */
export type OAdminProductIdGet = {
}

/**
 * @description 查询产品列表 buildResArrayTyped
 * @url /admin/product/list
 */
export type OAdminProductListGetItem = {  
}

/**
 * @description 新增产品 buildResAnyTyped
 * @url /admin/product
 */
export type OAdminProductPost = {
}

/**
 * @description 修改产品 buildResAnyTyped
 * @url /admin/product
 */
export type OAdminProductPut = {
}

/**
 * @description 查询删除后的产品列表  buildResAnyTyped
 * @url /admin/product/recycle/list
 */
export type OAdminProductRecycleListGet = {
}

/**
 * @description 申请权限列表 buildResAnyTyped
 * @url /admin/product/relevant/audit/list
 */
export type OAdminProductRelevantAuditListGet = {
}

/**
 * @description 申请权限审核 buildResAnyTyped
 * @url /admin/product/relevant/audit
 */
export type OAdminProductRelevantAuditPost = {
}

/**
 * @description 查询产品相关内容-文件 buildResAnyTyped
 * @url /admin/product/relevant/file
 */
export type OAdminProductRelevantFileGet = {
}

/**
 * @description 添加产品相关内容-文件 buildResAnyTyped
 * @url /admin/product/relevant/file
 */
export type OAdminProductRelevantFilePost = {
}

/**
 * @description 删除产品文件夹（分组） buildResAnyTyped
 * @url /admin/product/relevant/group/{x}
 */
export type OAdminProductRelevantGroupGroupIdDelete = {
}

/**
 * @description 查询产品文件夹（分组） buildResAnyTyped
 * @url /admin/product/relevant/group/list
 */
export type OAdminProductRelevantGroupListGet = {
}

/**
 * @description 添加产品文件夹（分组） buildResAnyTyped
 * @url /admin/product/relevant/group
 */
export type OAdminProductRelevantGroupPost = {
}

/**
 * @description 修改产品文件夹（分组） buildResAnyTyped
 * @url /admin/product/relevant/group
 */
export type OAdminProductRelevantGroupPut = {
}

/**
 * @description 批量排序-分组 buildResAnyTyped
 * @url /admin/product/relevant/group/sort
 */
export type OAdminProductRelevantGroupSortPost = {
}

/**
 * @description 删除产品相关内容 buildResAnyTyped
 * @url /admin/product/relevant/{x}
 */
export type OAdminProductRelevantIdDelete = {
}

/**
 * @description 查询产品相关内容-图片 buildResAnyTyped
 * @url /admin/product/relevant/image
 */
export type OAdminProductRelevantImageGet = {
}

/**
 * @description 添加产品相关内容-图片 buildResAnyTyped
 * @url /admin/product/relevant/image
 */
export type OAdminProductRelevantImagePost = {
}

/**
 * @description 查询产品相关内容等级 buildResAnyTyped
 * @url /admin/product/relevant/level/list
 */
export type OAdminProductRelevantLevelListGet = {
}

/**
 * @description 添加产品相关内容等级 buildResAnyTyped
 * @url /admin/product/relevant/level
 */
export type OAdminProductRelevantLevelPost = {
}

/**
 * @description 修改产品相关内容等级 buildResAnyTyped
 * @url /admin/product/relevant/level
 */
export type OAdminProductRelevantLevelPut = {
}

/**
 * @description 查询产品相关内容-新闻 buildResAnyTyped
 * @url /admin/product/relevant/news
 */
export type OAdminProductRelevantNewsGet = {
}

/**
 * @description 添加产品相关内容-新闻 buildResAnyTyped
 * @url /admin/product/relevant/news
 */
export type OAdminProductRelevantNewsPost = {
}

/**
 * @description 修改产品相关内容 buildResAnyTyped
 * @url /admin/product/relevant
 */
export type OAdminProductRelevantPut = {
}

/**
 * @description 排序相关产品内容 buildResAnyTyped
 * @url /admin/product/relevant/sort
 */
export type OAdminProductRelevantSortPost = {
}

/**
 * @description 查询产品相关内容-视频 buildResAnyTyped
 * @url /admin/product/relevant/video
 */
export type OAdminProductRelevantVideoGet = {
}

/**
 * @description 添加产品相关内容-视频 buildResAnyTyped
 * @url /admin/product/relevant/video
 */
export type OAdminProductRelevantVideoPost = {
}

/**
 * @description 撤销 buildResAnyTyped
 * @url /admin/product/revoke
 */
export type OAdminProductRevokePost = {
}

/**
 * @description 修改产品显示状态 buildResAnyTyped
 * @url /admin/product/showStatus
 */
export type OAdminProductShowStatusPost = {
}

/**
 * @description 修改产品排序 buildResAnyTyped
 * @url /admin/product/sort
 */
export type OAdminProductSortPut = {
}

/**
 * @description 根据卡号获取银行信息 buildResAnyTyped
 * @url /admin/publish/bankcardinfo
 */
export type OAdminPublishBankcardinfoGet = {
}

/**
 * @description 查询中介列表 buildResArrayTyped
 * @url /admin/publish/broker/list
 */
export type OAdminPublishBrokerListGetItem = {  
}

/**
 * @description 合同组件分类 buildResAnyTyped
 * @url /admin/publish/contract/component
 */
export type OAdminPublishContractComponentGet = {
}

/**
 * @description 合同列表 buildResAnyTyped
 * @url /admin/publish/contract/list
 */
export type OAdminPublishContractListGet = {
}

/**
 * @description 查询文案列表 buildResArrayTyped
 * @url /admin/publish/copywriting/list
 */
export type OAdminPublishCopywritingListGetItem = {  
}

/**
 * @description 查询客服列表 buildResArrayTyped
 * @url /admin/publish/customer/list
 */
export type OAdminPublishCustomerListGetItem = {  
}

/**
 * @description 查询部门列表 buildResAnyTyped
 * @url /admin/publish/dept/list
 */
export type OAdminPublishDeptListGet = {
}

/**
 * @description 查询部门列表 -我拥有的部门 buildResAnyTyped
 * @url /admin/publish/dept/ownerlist
 */
export type OAdminPublishDeptOwnerlistGet = {
}

/**
 * @description 获取私有文件签名地址 buildResAnyTyped
 * @url /admin/publish/file/signatureUrl
 */
export type OAdminPublishFileSignatureUrlGet = {
}

/**
 * @description 流程列表 buildResAnyTyped
 * @url /admin/publish/flow/list
 */
export type OAdminPublishFlowListGet = {
}

/**
 * @description 基金列表 buildResAnyTyped
 * @url /admin/publish/fund/list
 */
export type OAdminPublishFundListGet = {
}

/**
 * @description 查询投资者列表 buildResAnyTyped
 * @url /admin/publish/investor/list
 */
export type OAdminPublishInvestorListGet = {
}

/**
 * @description 查询律师列表 buildResArrayTyped
 * @url /admin/publish/lawyer/list
 */
export type OAdminPublishLawyerListGetItem = {  
}

/**
 * @description 查询素材列表 buildResAnyTyped
 * @url /admin/publish/material/list
 */
export type OAdminPublishMaterialListGet = {
}

/**
 * @description 查询文章列表 buildResAnyTyped
 * @url /admin/publish/news/list
 */
export type OAdminPublishNewsListGet = {
}

/**
 * @description 操作人列表 buildResAnyTyped
 * @url /admin/publish/operator/list
 */
export type OAdminPublishOperatorListGet = {
}

/**
 * @description 查询来源列表 buildResAnyTyped
 * @url /admin/publish/origin/list
 */
export type OAdminPublishOriginListGet = {
}

/**
 * @description 获取手机号区号 buildResArrayTyped
 * @url /admin/publish/phone/code/list
 */
export type OAdminPublishPhoneCodeListGetItem = {
	countryCode: string;
	countryEn: string;
	countryEnAbbr: string;
	countryIcon: string;
	countryZh: string;
	id: number;  
}

/**
 * @description 产品列表 buildResAnyTyped
 * @url /admin/publish/product/list
 */
export type OAdminPublishProductListGet = {
}

/**
 * @description 在售产品列表 buildResAnyTyped
 * @url /admin/publish/product/sale/list
 */
export type OAdminPublishProductSaleListGet = {
}

/**
 * @description 产品类型列表 buildResAnyTyped
 * @url /admin/publish/product/type/list
 */
export type OAdminPublishProductTypeListGet = {
}

/**
 * @description 获取员工归属地 buildResAnyTyped
 * @url /admin/publish/publish/sysUser/city/list
 */
export type OAdminPublishPublishSysUserCityListGet = {
}

/**
 * @description 放弃/删除列表 buildResAnyTyped
 * @url /admin/publish/reason/list/{x}
 */
export type OAdminPublishReasonListTypeGet = {
}

/**
 * @description 查询公海列表 buildResAnyTyped
 * @url /admin/publish/sea/list
 */
export type OAdminPublishSeaListGet = {
}

/**
 * @description 获取渠道列表 buildResAnyTyped
 * @url /admin/publish/sysChannel/list
 */
export type OAdminPublishSysChannelListGet = {
}

/**
 * @description 获取员工列表（一般用于线索里分配至员工） buildResAnyTyped
 * @url /admin/publish/sysUser/list/byLoginUser
 */
export type OAdminPublishSysUserListByLoginUserGet = {
}

/**
 * @description 查询所有标签 buildResAnyTyped
 * @url /admin/publish/tag/list
 */
export type OAdminPublishTagListGet = {
}

/**
 * @description 查询我能看到的线索 buildResAnyTyped
 * @url /admin/publish/thread/list/byLoginUser
 */
export type OAdminPublishThreadListByLoginUserGet = {
}

/**
 * @description 查询所有线索 buildResAnyTyped
 * @url /admin/publish/thread/list
 */
export type OAdminPublishThreadListGet = {
}

/**
 * @description 查询待办事项类别列表 buildResAnyTyped
 * @url /admin/publish/todo/category/list
 */
export type OAdminPublishTodoCategoryListGet = {
}

/**
 * @description 上传文件-公共 buildResAnyTyped
 * @url /admin/publish/upload/file
 */
export type OAdminPublishUploadFilePost = {
}

/**
 * @description 上传文件-私有 buildResAnyTyped
 * @url /admin/publish/upload/private/file
 */
export type OAdminPublishUploadPrivateFilePost = {
}

/**
 * @description 删除原因 buildResAnyTyped
 * @url /admin/reason/{x}
 */
export type OAdminReasonIdDelete = {
}

/**
 * @description 查询放弃/删除详情 buildResAnyTyped
 * @url /admin/reason/{x}
 */
export type OAdminReasonIdGet = {
}

/**
 * @description 查询放弃/删除列表 buildResAnyTyped
 * @url /admin/reason/list/{x}
 */
export type OAdminReasonListTypeGet = {
}

/**
 * @description 添加放弃/删除原因 buildResAnyTyped
 * @url /admin/reason
 */
export type OAdminReasonPost = {
}

/**
 * @description 编辑放弃/删除原因 buildResAnyTyped
 * @url /admin/reason
 */
export type OAdminReasonPut = {
}

/**
 * @description 编辑放弃/删除原因状态 buildResAnyTyped
 * @url /admin/reason/status
 */
export type OAdminReasonStatusPut = {
}

/**
 * @description 查询佣金记录 buildResAnyTyped
 * @url /admin/rebate/list
 */
export type OAdminRebateListGet = {
}

/**
 * @description 添加佣金 buildResAnyTyped
 * @url /admin/rebate
 */
export type OAdminRebatePost = {
}

/**
 * @description 预约审核 buildResAnyTyped
 * @url /admin/reserve/audit
 */
export type OAdminReserveAuditPost = {
}

/**
 * @description 预定列表 buildResAnyTyped
 * @url /admin/reserve/list
 */
export type OAdminReserveListGet = {
}

/**
 * @description 查询所有可用角色 buildResArrayTyped
 * @url /admin/role/list/all
 */
export type OAdminRoleListAllGetItem = {  
}

/**
 * @description 查询角色列表 buildResArrayTyped
 * @url /admin/role/list
 */
export type OAdminRoleListGetItem = {  
}

/**
 * @description 修改角色权限 buildResAnyTyped
 * @url /admin/role/perms
 */
export type OAdminRolePermsPut = {
}

/**
 * @description 新增角色 buildResAnyTyped
 * @url /admin/role
 */
export type OAdminRolePost = {
}

/**
 * @description 修改角色 buildResAnyTyped
 * @url /admin/role
 */
export type OAdminRolePut = {
}

/**
 * @description 删除角色 buildResAnyTyped
 * @url /admin/role/{x}
 */
export type OAdminRoleRoleIdDelete = {
}

/**
 * @description 查询角色详情 buildResAnyTyped
 * @url /admin/role/{x}
 */
export type OAdminRoleRoleIdGet = {
}

/**
 * @description 删除公海 buildResAnyTyped
 * @url /admin/sea/{x}
 */
export type OAdminSeaIdDelete = {
}

/**
 * @description 公海详情 buildResAnyTyped
 * @url /admin/sea/{x}
 */
export type OAdminSeaIdGet = {
}

/**
 * @description 删除公海参与人 buildResAnyTyped
 * @url /admin/sea/join/user/{x}
 */
export type OAdminSeaJoinUserJoinIdDelete = {
}

/**
 * @description 获取公海参与人列表 buildResAnyTyped
 * @url /admin/sea/join/user/list
 */
export type OAdminSeaJoinUserListGet = {
}

/**
 * @description 添加公海参与人 buildResAnyTyped
 * @url /admin/sea/join/user
 */
export type OAdminSeaJoinUserPost = {
}

/**
 * @description 公海列表 buildResAnyTyped
 * @url /admin/sea/list
 */
export type OAdminSeaListGet = {
}

/**
 * @description 添加公海 buildResAnyTyped
 * @url /admin/sea
 */
export type OAdminSeaPost = {
}

/**
 * @description 编辑公海 buildResAnyTyped
 * @url /admin/sea
 */
export type OAdminSeaPut = {
}

/**
 * @description 编辑标签组选择范围 buildResAnyTyped
 * @url /admin/tag/group/choice
 */
export type OAdminTagGroupChoicePut = {
}

/**
 * @description 删除标签组 buildResAnyTyped
 * @url /admin/tag/group/{x}
 */
export type OAdminTagGroupGroupIdDelete = {
}

/**
 * @description 查询标签组列表 buildResAnyTyped
 * @url /admin/tag/group/list
 */
export type OAdminTagGroupListGet = {
}

/**
 * @description 添加标签组 buildResAnyTyped
 * @url /admin/tag/group
 */
export type OAdminTagGroupPost = {
}

/**
 * @description 编辑标签组 buildResAnyTyped
 * @url /admin/tag/group
 */
export type OAdminTagGroupPut = {
}

/**
 * @description 编辑标签组状态 buildResAnyTyped
 * @url /admin/tag/group/status
 */
export type OAdminTagGroupStatusPut = {
}

/**
 * @description 查询标签列表-根据标签组ID buildResAnyTyped
 * @url /admin/tag/list/byGroupId
 */
export type OAdminTagListByGroupIdGet = {
}

/**
 * @description 添加标签 buildResAnyTyped
 * @url /admin/tag
 */
export type OAdminTagPost = {
}

/**
 * @description 编辑标签 buildResAnyTyped
 * @url /admin/tag
 */
export type OAdminTagPut = {
}

/**
 * @description 编辑标签状态 buildResAnyTyped
 * @url /admin/tag/status
 */
export type OAdminTagStatusPut = {
}

/**
 * @description 同步企业微信标签 buildResAnyTyped
 * @url /admin/tag/sync
 */
export type OAdminTagSyncPost = {
}

/**
 * @description 删除标签 buildResAnyTyped
 * @url /admin/tag/{x}
 */
export type OAdminTagTagIdDelete = {
}

/**
 * @description 用户线索添加跟进团队（线索详情-用户线索添加跟进团队-多团队） buildResAnyTyped
 * @url /admin/thread/addDeptToThread
 */
export type OAdminThreadAddDeptToThreadPost = {
}

/**
 * @description 团队添加线索（团队详情-团队添加线索-单团队） buildResAnyTyped
 * @url /admin/thread/addThreadToDept
 */
export type OAdminThreadAddThreadToDeptPost = {
}

/**
 * @description 全部客户列表-一般仅管理员有权限 buildResAnyTyped
 * @url /admin/thread/all/list
 */
export type OAdminThreadAllListGet = {
}

/**
 * @description 分配客户（支持分配给多个团队里的多个人） buildResAnyTyped
 * @url /admin/thread/allocation
 */
export type OAdminThreadAllocationPost = {
}

/**
 * @description 审核申请 buildResAnyTyped
 * @url /admin/thread/apply/audit
 */
export type OAdminThreadApplyAuditPost = {
}

/**
 * @description 线索申请至团队 buildResAnyTyped
 * @url /admin/thread/apply
 */
export type OAdminThreadApplyPost = {
}

/**
 * @description 放弃/删除审核详情 buildResAnyTyped
 * @url /admin/thread/audit/detail/{x}
 */
export type OAdminThreadAuditDetailIdGet = {
}

/**
 * @description 放弃/删除审核列表 buildResAnyTyped
 * @url /admin/thread/audit/list/{x}
 */
export type OAdminThreadAuditListTypeGet = {
}

/**
 * @description 审核 放弃/删除审核 buildResAnyTyped
 * @url /admin/thread/audit
 */
export type OAdminThreadAuditPost = {
}

/**
 * @description 批量添加跟进部门 buildResAnyTyped
 * @url /admin/thread/batchAddDeptToThread
 */
export type OAdminThreadBatchAddDeptToThreadPost = {
}

/**
 * @description 批量添加跟进人 buildResAnyTyped
 * @url /admin/thread/batchAllocation
 */
export type OAdminThreadBatchAllocationPost = {
}

/**
 * @description 拨号 buildResAnyTyped
 * @url /admin/thread/call/phone
 */
export type OAdminThreadCallPhonePost = {
}

/**
 * @description 检查电销手机是否登录 buildRes
 * @url /admin/thread/check/dxLogin
 */
export type OAdminThreadCheckDxLoginPost =number

/**
 * @description 更改客户意向项目 buildResAnyTyped
 * @url /admin/thread/customer/product
 */
export type OAdminThreadCustomerProductPost = {
}

/**
 * @description 更改客户意向状态 buildResAnyTyped
 * @url /admin/thread/customer/status
 */
export type OAdminThreadCustomerStatusPost = {
}

/**
 * @description 删除 buildResAnyTyped
 * @url /admin/thread/delete
 */
export type OAdminThreadDeletePost = {
}

/**
 * @description 团队移除线索 buildResAnyTyped
 * @url /admin/thread/delThreadForDept
 */
export type OAdminThreadDelThreadForDeptPost = {
}

/**
 * @description 团队客户列表-一般仅管理员和负责人有权限 buildResAnyTyped
 * @url /admin/thread/dept/list
 */
export type OAdminThreadDeptListGet = {
}

/**
 * @description 下载导出 buildResAnyTyped
 * @url /admin/thread/download
 */
export type OAdminThreadDownloadPost = {
}

/**
 * @description 查询签约详情 buildResAnyTyped
 * @url /admin/thread/employee/conclude/detail
 */
export type OAdminThreadEmployeeConcludeDetailGet = {
}

/**
 * @description 删除签约 buildResAnyTyped
 * @url /admin/thread/employee/conclude/{x}
 */
export type OAdminThreadEmployeeConcludeIdDelete = {
}

/**
 * @description 查询签约列表 buildResAnyTyped
 * @url /admin/thread/employee/conclude/list
 */
export type OAdminThreadEmployeeConcludeListGet = {
}

/**
 * @description 新增签约 buildResAnyTyped
 * @url /admin/thread/employee/conclude
 */
export type OAdminThreadEmployeeConcludePost = {
}

/**
 * @description 修改签约 buildResAnyTyped
 * @url /admin/thread/employee/conclude
 */
export type OAdminThreadEmployeeConcludePut = {
}

/**
 * @description 查询签约排行榜 buildResAnyTyped
 * @url /admin/thread/employee/conclude/rank/{x}
 */
export type OAdminThreadEmployeeConcludeRankTypeGet = {
}

/**
 * @description 获取导出列表 buildResAnyTyped
 * @url /admin/thread/export/list
 */
export type OAdminThreadExportListGet = {
}

/**
 * @description 数据导出 buildResAnyTyped
 * @url /admin/thread/export
 */
export type OAdminThreadExportPost = {
}

/**
 * @description 客户详情-跟进企微联系人ID buildResAnyTyped
 * @url /admin/thread/external/{x}
 */
export type OAdminThreadExternalExternalUserIdGet = {
}

/**
 * @description 旅程列表 buildResAnyTyped
 * @url /admin/thread/follow/record
 */
export type OAdminThreadFollowRecordGet = {
}

/**
 * @description 添加旅程 buildResAnyTyped
 * @url /admin/thread/follow/record
 */
export type OAdminThreadFollowRecordPost = {
}

/**
 * @description 变更跟进状态 buildResAnyTyped
 * @url /admin/thread/follow/status
 */
export type OAdminThreadFollowStatusPut = {
}

/**
 * @description 放弃 buildResAnyTyped
 * @url /admin/thread/giveup
 */
export type OAdminThreadGiveupPost = {
}

/**
 * @description 客户详情 buildResAnyTyped
 * @url /admin/thread/{x}
 */
export type OAdminThreadIdGet = {
}

/**
 * @description 标记为重要/不重要客户 buildResAnyTyped
 * @url /admin/thread/important
 */
export type OAdminThreadImportantPost = {
}

/**
 * @description 公海客户列表 buildResAnyTyped
 * @url /admin/thread/list
 */
export type OAdminThreadListGet = {
}

/**
 * @description 获取合并后的基本信息 buildResAnyTyped
 * @url /admin/thread/merge/base/info
 */
export type OAdminThreadMergeBaseInfoPost = {
}

/**
 * @description 获取合并后的旅程信息 buildResAnyTyped
 * @url /admin/thread/merge/follow/record
 */
export type OAdminThreadMergeFollowRecordPost = {
}

/**
 * @description 合并线索 buildResAnyTyped
 * @url /admin/thread/merge
 */
export type OAdminThreadMergePost = {
}

/**
 * @description 我的客户列表 buildResAnyTyped
 * @url /admin/thread/mine/list
 */
export type OAdminThreadMineListGet = {
}

/**
 * @description 删除个人标签（根据用户删除所有线索下的标签） buildResAnyTyped
 * @url /admin/thread/personage/tag/all
 */
export type OAdminThreadPersonageTagAllDelete = {
}

/**
 * @description 所有的个人标签 buildResAnyTyped
 * @url /admin/thread/personage/tag/alllist
 */
export type OAdminThreadPersonageTagAlllistGet = {
}

/**
 * @description 删除个人标签 buildResAnyTyped
 * @url /admin/thread/personage/tag/{x}
 */
export type OAdminThreadPersonageTagIdDelete = {
}

/**
 * @description 我的个人标签 buildResAnyTyped
 * @url /admin/thread/personage/tag/minelist
 */
export type OAdminThreadPersonageTagMinelistGet = {
}

/**
 * @description 添加个人标签 buildResAnyTyped
 * @url /admin/thread/personage/tag
 */
export type OAdminThreadPersonageTagPost = {
}

/**
 * @description 生成手机号随机串 buildResAnyTyped
 * @url /admin/thread/phone/hashcode
 */
export type OAdminThreadPhoneHashcodePost = {
}

/**
 * @description 添加客户 buildResAnyTyped
 * @url /admin/thread
 */
export type OAdminThreadPost = {
}

/**
 * @description 获取主跟进人列表 buildResAnyTyped
 * @url /admin/thread/primary/follower/list
 */
export type OAdminThreadPrimaryFollowerListGet = {
}

/**
 * @description 设置主跟进人 buildResAnyTyped
 * @url /admin/thread/primary/follower
 */
export type OAdminThreadPrimaryFollowerPost = {
}

/**
 * @description 获取所有线索（不关心有无被分配，可用于添加线索到团队，该API一般不需要权限控制） buildResAnyTyped
 * @url /admin/thread/public/allList
 */
export type OAdminThreadPublicAllListGet = {
}

/**
 * @description 编辑客户 buildResAnyTyped
 * @url /admin/thread
 */
export type OAdminThreadPut = {
}

/**
 * @description 领取线索 buildResAnyTyped
 * @url /admin/thread/receive
 */
export type OAdminThreadReceivePost = {
}

/**
 * @description 回收站客户列表 buildResAnyTyped
 * @url /admin/thread/recycle/list
 */
export type OAdminThreadRecycleListGet = {
}

/**
 * @description 撤销 buildResAnyTyped
 * @url /admin/thread/revoke
 */
export type OAdminThreadRevokePost = {
}

/**
 * @description 发送短信 buildResAnyTyped
 * @url /admin/thread/sms/phone
 */
export type OAdminThreadSmsPhonePost = {
}

/**
 * @description 获取跟进状态 buildResAnyTyped
 * @url /admin/thread/status/list
 */
export type OAdminThreadStatusListGet = {
}

/**
 * @description 修改客户标签 buildResAnyTyped
 * @url /admin/thread/tag
 */
export type OAdminThreadTagPut = {
}

/**
 * @description 转让 buildResAnyTyped
 * @url /admin/thread/transfer
 */
export type OAdminThreadTransferPost = {
}

/**
 * @description 申请成交状态 buildResAnyTyped
 * @url /admin/thread/tran/status/apply
 */
export type OAdminThreadTranStatusApplyPost = {
}

/**
 * @description 更改成交状态 buildResAnyTyped
 * @url /admin/thread/tran/status
 */
export type OAdminThreadTranStatusPost = {
}

/**
 * @description 最新未跟进消息提醒统计信息 buildResAnyTyped
 * @url /admin/thread/unfollow/remind/info
 */
export type OAdminThreadUnfollowRemindInfoGet = {
}

/**
 * @description 最新未跟进消息提醒列表 buildResAnyTyped
 * @url /admin/thread/unfollow/remind/list
 */
export type OAdminThreadUnfollowRemindListGet = {
}

/**
 * @description 查询客户组 buildResAnyTyped
 * @url /admin/thread/user/group/list
 */
export type OAdminThreadUserGroupListGet = {
}

/**
 * @description 添加客户组 buildResAnyTyped
 * @url /admin/thread/user/group
 */
export type OAdminThreadUserGroupPost = {
}

/**
 * @description 批量添加任务 buildResAnyTyped
 * @url /admin/todo/batch
 */
export type OAdminTodoBatchPost = {
}

/**
 * @description 获取更变历史 buildResAnyTyped
 * @url /admin/todo/change/list
 */
export type OAdminTodoChangeListGet = {
}

/**
 * @description 获取评论列表 buildResAnyTyped
 * @url /admin/todo/comment/list
 */
export type OAdminTodoCommentListGet = {
}

/**
 * @description 添加评论 buildResAnyTyped
 * @url /admin/todo/comment
 */
export type OAdminTodoCommentPost = {
}

/**
 * @description 完成/取消完成待办 buildResAnyTyped
 * @url /admin/todo/complete
 */
export type OAdminTodoCompletePost = {
}

/**
 * @description 完成/取消完成任务清单 buildResAnyTyped
 * @url /admin/todo/detail/complete
 */
export type OAdminTodoDetailCompletePost = {
}

/**
 * @description 获取任务清单详情 buildResAnyTyped
 * @url /admin/todo/detail/info
 */
export type OAdminTodoDetailInfoGet = {
}

/**
 * @description 获取任务清单列表 buildResAnyTyped
 * @url /admin/todo/detail/list
 */
export type OAdminTodoDetailListGet = {
}

/**
 * @description 添加任务清单 buildResAnyTyped
 * @url /admin/todo/detail
 */
export type OAdminTodoDetailPost = {
}

/**
 * @description 修改任务清单 buildResAnyTyped
 * @url /admin/todo/detail
 */
export type OAdminTodoDetailPut = {
}

/**
 * @description 获取待办详情 buildResAnyTyped
 * @url /admin/todo/info
 */
export type OAdminTodoInfoGet = {
}

/**
 * @description 获取负责人列表 buildResAnyTyped
 * @url /admin/todo/leader/list
 */
export type OAdminTodoLeaderListGet = {
}

/**
 * @description 获取待办列表 buildResAnyTyped
 * @url /admin/todo/list
 */
export type OAdminTodoListGet = {
}

/**
 * @description 获取部门列表（左侧拦） buildResAnyTyped
 * @url /admin/todo/owner/deptList
 */
export type OAdminTodoOwnerDeptListGet = {
}

/**
 * @description 添加待办 buildResAnyTyped
 * @url /admin/todo
 */
export type OAdminTodoPost = {
}

/**
 * @description 修改待办 buildResAnyTyped
 * @url /admin/todo
 */
export type OAdminTodoPut = {
}

/**
 * @description 添加回复 buildResAnyTyped
 * @url /admin/todo/reply
 */
export type OAdminTodoReplyPost = {
}

/**
 * @description 完成/取消完成子待办 buildResAnyTyped
 * @url /admin/todo/sub/complete
 */
export type OAdminTodoSubCompletePost = {
}

/**
 * @description 获取子待办详情 buildResAnyTyped
 * @url /admin/todo/sub/detail
 */
export type OAdminTodoSubDetailGet = {
}

/**
 * @description 获取子待办列表 buildResAnyTyped
 * @url /admin/todo/sub/list
 */
export type OAdminTodoSubListGet = {
}

/**
 * @description 添加子待办 buildResAnyTyped
 * @url /admin/todo/sub
 */
export type OAdminTodoSubPost = {
}

/**
 * @description 修改子待办 buildResAnyTyped
 * @url /admin/todo/sub
 */
export type OAdminTodoSubPut = {
}

/**
 * @description 修改密码 buildResAnyTyped
 * @url /admin/updatePwd
 */
export type OAdminUpdatePwdPut = {
}

/**
 * @description 查询管理员列表 buildResArrayTyped
 * @url /admin/user/list
 */
export type OAdminUserListGetItem = {  
}

/**
 * @description 移除员工-从部门里移除 buildResAnyTyped
 * @url /admin/user/moveUser
 */
export type OAdminUserMoveUserPost = {
}

/**
 * @description 新增管理员 buildResAnyTyped
 * @url /admin/user
 */
export type OAdminUserPost = {
}

/**
 * @description 修改管理员基本信息 buildResAnyTyped
 * @url /admin/user/profile
 */
export type OAdminUserProfilePut = {
}

/**
 * @description 修改管理员 buildResAnyTyped
 * @url /admin/user
 */
export type OAdminUserPut = {
}

/**
 * @description 关联老账户到部门 buildResAnyTyped
 * @url /admin/user/relevantUserToDept
 */
export type OAdminUserRelevantUserToDeptPost = {
}

/**
 * @description 重置密码 buildResAnyTyped
 * @url /admin/user/resetPwd
 */
export type OAdminUserResetPwdPut = {
}

/**
 * @description 获取管理员角色key buildResAnyTyped
 * @url /admin/user/rolekey
 */
export type OAdminUserRolekeyGet = {
}

/**
 * @description 删除管理员 buildResAnyTyped
 * @url /admin/user/{x}
 */
export type OAdminUserUserIdDelete = {
}

/**
 * @description 查询管理员详情 buildResAnyTyped
 * @url /admin/user/{x}
 */
export type OAdminUserUserIdGet = {
}

/**
 * @description 企业微信登录-绑定账号 buildResAnyTyped
 * @url /admin/weblogin/bind
 */
export type OAdminWebloginBindPost = {
}

/**
 * @description 企业微信登录-绑定账号-发送邮件 buildResAnyTyped
 * @url /admin/weblogin/sendEmail
 */
export type OAdminWebloginSendEmailPost = {
}

/**
 * @description 获取提现详情 buildResAnyTyped
 * @url /admin/withdraw/{x}
 */
export type OAdminWithdrawIdGet = {
}

/**
 * @description 查询提现列表 buildResArrayTyped
 * @url /admin/withdraw/list
 */
export type OAdminWithdrawListGetItem = {  
}

/**
 * @description 通过审核 buildResAnyTyped
 * @url /admin/withdraw/pass
 */
export type OAdminWithdrawPassPost = {
}

/**
 * @description 拒绝审核 buildResAnyTyped
 * @url /admin/withdraw/reject
 */
export type OAdminWithdrawRejectPost = {
}

/**
 * @description 构造企业微信登录链接 buildResAnyTyped
 * @url /admin/wwlogin/url
 */
export type OAdminWwloginUrlGet = {
}

/**
 * @description 获取旅程消息 buildResAnyTyped
 * @url /channel/follow/notify/record
 */
export type OChannelFollowNotifyRecordGet = {
}

/**
 * @description 渠道信息 buildResAnyTyped
 * @url /channel/info
 */
export type OChannelInfoGet = {
}

/**
 * @description 渠道登录 buildResAnyTyped
 * @url /channel/login
 */
export type OChannelLoginPost = {
}

/**
 * @description 修改密码 buildResAnyTyped
 * @url /channel/password
 */
export type OChannelPasswordPost = {
}

/**
 * @description 获取线索详情 buildResAnyTyped
 * @url /channel/thread/detail
 */
export type OChannelThreadDetailGet = {
}

/**
 * @description 获取旅程列表 buildResAnyTyped
 * @url /channel/thread/follow/record
 */
export type OChannelThreadFollowRecordGet = {
}

/**
 * @description 获取线索列表 buildResAnyTyped
 * @url /channel/thread/list
 */
export type OChannelThreadListGet = {
}

/**
 * @description 添加线索 buildResAnyTyped
 * @url /channel/thread
 */
export type OChannelThreadPost = {
}

/**
 * @description 项目详情 buildResArrayTyped
 * @url /common/product/{x}
 */
export type OCommonProductIdGetItem = {
	fundStatus: number; // 发行状态(原资金状态) 1-准备发行 2-募集中 3-募集完毕
	id: number; // 产品ID
	mobileLinkUrl: null;
	name: string; // 产品名称
	pcLinkUrl: null;
	progressStatus: number; // 建设进度状态  1-项目规划中 2-开工准备中 3-地基施工中 4-主体施工中 5-内部施工中 6-已经完工 7-项目出租中 8-项目销售中 9-出租销售完成
	projectStatus: number; // 项目状态 1-即将开始 2-申购中 3-已过户 4-暂停 5-终止
	type: string; // 产品类型  
}

/**
 * @description 项目列表 buildResArrayTyped
 * @url /common/product/list
 */
export type OCommonProductListGetItem = {
	fundStatus: number; // 发行状态(原资金状态) 1-准备发行 2-募集中 3-募集完毕
	id: number; // 产品ID
	mobileLinkUrl: null;
	name: string; // 产品名称
	pcLinkUrl: null;
	progressStatus: number; // 建设进度状态  1-项目规划中 2-开工准备中 3-地基施工中 4-主体施工中 5-内部施工中 6-已经完工 7-项目出租中 8-项目销售中 9-出租销售完成
	projectStatus: number; // 项目状态 1-即将开始 2-申购中 3-已过户 4-暂停 5-终止
	type: string; // 产品类型  
}

/**
 * @description 获取产品相关内容 buildResAnyTyped
 * @url /common/product/relevant/content
 */
export type OCommonProductRelevantContentGet = {
}

/**
 * @description 发送手机验证码 buildResAnyTyped
 * @url /common/send/phone/code
 */
export type OCommonSendPhoneCodePost = {
}

/**
 * @description 修改图像 buildResAnyTyped
 * @url /investor/avatar/modify
 */
export type OInvestorAvatarModifyPost = {
}

/**
 * @description 绑定/换绑 银行卡信息 buildResAnyTyped
 * @url /investor/bank/account/bind
 */
export type OInvestorBankAccountBindPost = {
}

/**
 * @description 获取银行卡信息 buildResAnyTyped
 * @url /investor/bank/account
 */
export type OInvestorBankAccountGet = {
}

/**
 * @description 解绑 银行卡信息 buildResAnyTyped
 * @url /investor/bank/account/unbind
 */
export type OInvestorBankAccountUnbindPost = {
}

/**
 * @description 绑定邮箱 buildResAnyTyped
 * @url /investor/bindEmail
 */
export type OInvestorBindEmailPost = {
}

/**
 * @description 我的顾问 buildResAnyTyped
 * @url /investor/broker/list
 */
export type OInvestorBrokerListGet = {
}

/**
 * @description 选择合格投资者regs/regd buildResAnyTyped
 * @url /investor/chooseIdentity
 */
export type OInvestorChooseIdentityPost = {
}

/**
 * @description 删除收藏 buildResAnyTyped
 * @url /investor/collection/{x}
 */
export type OInvestorCollectionCollectionNoDelete = {
}

/**
 * @description 收藏列表-直播 buildResAnyTyped
 * @url /investor/collection/live
 */
export type OInvestorCollectionLiveGet = {
}

/**
 * @description 收藏列表-新闻 buildResAnyTyped
 * @url /investor/collection/news
 */
export type OInvestorCollectionNewsGet = {
}

/**
 * @description 新增收藏 buildResAnyTyped
 * @url /investor/collection
 */
export type OInvestorCollectionPost = {
}

/**
 * @description 收藏列表-项目 buildResAnyTyped
 * @url /investor/collection/project
 */
export type OInvestorCollectionProjectGet = {
}

/**
 * @description 我的文案 buildResAnyTyped
 * @url /investor/copywriting/list
 */
export type OInvestorCopywritingListGet = {
}

/**
 * @description 我的优惠券 buildResAnyTyped
 * @url /investor/coupon
 */
export type OInvestorCouponGet = {
}

/**
 * @description 领取转让的优惠券 buildResAnyTyped
 * @url /investor/coupon/receive
 */
export type OInvestorCouponReceivePost = {
}

/**
 * @description 获取转让优惠券 buildResAnyTyped
 * @url /investor/coupon/transfer
 */
export type OInvestorCouponTransferGet = {
}

/**
 * @description 获取我的转让列表 buildResAnyTyped
 * @url /investor/coupon/transfer/list
 */
export type OInvestorCouponTransferListGet = {
}

/**
 * @description 优惠券转让 buildResAnyTyped
 * @url /investor/coupon/transfer
 */
export type OInvestorCouponTransferPost = {
}

/**
 * @description 我的客服 buildResAnyTyped
 * @url /investor/customer/list
 */
export type OInvestorCustomerListGet = {
}

/**
 * @description EB-5基金 buildResAnyTyped
 * @url /investor/eb5fund/list
 */
export type OInvestorEb5fundListGet = {
}

/**
 * @description 绑定邮箱-发送验证邮件 buildResAnyTyped
 * @url /investor/email/bind
 */
export type OInvestorEmailBindPost = {
}

/**
 * @description 解绑邮箱-发送验证邮件 buildResAnyTyped
 * @url /investor/email/unbind
 */
export type OInvestorEmailUnbindPost = {
}

/**
 * @description 文件列表 buildResAnyTyped
 * @url /investor/file/list
 */
export type OInvestorFileListGet = {
}

/**
 * @description 历史文件 buildResAnyTyped
 * @url /investor/history/file/list
 */
export type OInvestorHistoryFileListGet = {
}

/**
 * @description 邀请码信息 buildResAnyTyped
 * @url /investor/invitation/info
 */
export type OInvestorInvitationInfoGet = {
}

/**
 * @description 邀请记录 buildResAnyTyped
 * @url /investor/invitation/list
 */
export type OInvestorInvitationListGet = {
}

/**
 * @description 邀请记录订单列表 buildResAnyTyped
 * @url /investor/invitation/order/list
 */
export type OInvestorInvitationOrderListGet = {
}

/**
 * @description 我的律师 buildResAnyTyped
 * @url /investor/lawyer/list
 */
export type OInvestorLawyerListGet = {
}

/**
 * @description 修改密码 buildResAnyTyped
 * @url /investor/modifyPassword
 */
export type OInvestorModifyPasswordPost = {
}

/**
 * @description 消息列表 buildResAnyTyped
 * @url /investor/notification
 */
export type OInvestorNotificationGet = {
}

/**
 * @description 消息详情 buildResAnyTyped
 * @url /investor/notification/{x}
 */
export type OInvestorNotificationIdGet = {
}

/**
 * @description 标记已读 buildResAnyTyped
 * @url /investor/notification/read
 */
export type OInvestorNotificationReadPost = {
}

/**
 * @description 获取未读数 buildResAnyTyped
 * @url /investor/notification/unread/count
 */
export type OInvestorNotificationUnreadCountGet = {
}

/**
 * @description 取消订单 buildResAnyTyped
 * @url /investor/order/cancel
 */
export type OInvestorOrderCancelPost = {
}

/**
 * @description 创建订单 buildResAnyTyped
 * @url /investor/order/create
 */
export type OInvestorOrderCreatePost = {
}

/**
 * @description 订单列表 buildResArrayTyped
 * @url /investor/order/list
 */
export type OInvestorOrderListGetItem = {
	createTime: string;
	curStep: null;
	id: number;
	orderNo: string;
	productName: string;
	productType: string;
	step: number;  
}

/**
 * @description 查询订单操作记录 buildResAnyTyped
 * @url /investor/order/oper/record
 */
export type OInvestorOrderOperRecordGet = {
}

/**
 * @description 订单详情 buildResAnyTyped
 * @url /investor/order/{x}
 */
export type OInvestorOrderOrderIdGet = {
}

/**
 * @description 查询我的预约 buildResAnyTyped
 * @url /investor/order/reserve
 */
export type OInvestorOrderReserveGet = {
}

/**
 * @description 预约项目订单 buildResAnyTyped
 * @url /investor/order/reserve
 */
export type OInvestorOrderReservePost = {
}

/**
 * @description 签署回调 buildResAnyTyped
 * @url /investor/order/sign/callback
 */
export type OInvestorOrderSignCallbackPost = {
}

/**
 * @description 查询子订单状态 buildResAnyTyped
 * @url /investor/order/status/{x}
 */
export type OInvestorOrderStatusOrderSubIdGet = {
}

/**
 * @description 完成订单步骤 buildResAnyTyped
 * @url /investor/order/step
 */
export type OInvestorOrderStepPut = {
}

/**
 * @description 申请产品相关内容查看权限 buildResAnyTyped
 * @url /investor/product/relevant/perms
 */
export type OInvestorProductRelevantPermsPost = {
}

/**
 * @description 获取个人资料 buildResAnyTyped
 * @url /investor/profile/detail
 */
export type OInvestorProfileDetailGet = {
}

/**
 * @description 修改个人资料 buildResAnyTyped
 * @url /investor/profile/modify
 */
export type OInvestorProfileModifyPost = {
}

/**
 * @description 添加新印章 buildResAnyTyped
 * @url /investor/seal/create
 */
export type OInvestorSealCreatePost = {
}

/**
 * @description 获取印章列表 buildResArrayTyped
 * @url /investor/seal/list
 */
export type OInvestorSealListGetItem = {  
}

/**
 * @description 查看印章 buildResAnyTyped
 * @url /investor/seal/record/info
 */
export type OInvestorSealRecordInfoPost = {
}

/**
 * @description 吊销印章 buildResAnyTyped
 * @url /investor/seal/record/withdraw
 */
export type OInvestorSealRecordWithdrawPost = {
}

/**
 * @description 我的服务 buildResAnyTyped
 * @url /investor/service/list
 */
export type OInvestorServiceListGet = {
}

/**
 * @description 订阅数据 buildResArrayTyped
 * @url /investor/subscribe/info
 */
export type OInvestorSubscribeInfoGetItem = {
	desc: string;
	isSubscribe: number;
	nodeKey: string;
	nodeText: string;  
}

/**
 * @description 订阅 buildResAnyTyped
 * @url /investor/subscribe
 */
export type OInvestorSubscribePost = {
}

/**
 * @description 查询待办列表 buildResAnyTyped
 * @url /investor/todo/list
 */
export type OInvestorTodoListGet = {
}

/**
 * @description 解绑邮箱,需先关闭2FA buildResAnyTyped
 * @url /investor/unbindEmail
 */
export type OInvestorUnbindEmailPost = {
}

/**
 * @description 取消订阅 buildResAnyTyped
 * @url /investor/unsubscribe
 */
export type OInvestorUnsubscribePost = {
}

/**
 * @description 投资记录 buildResArrayTyped
 * @url /investor/wallet/deposit/list
 */
export type OInvestorWalletDepositListGetItem = {
	afterAmount: number;
	amount: number;
	beforeAmount: number;
	channelType: string;
	createBy: string;
	createById: number;
	createTime: string;
	depositAccountId: number;
	depositNo: string;
	id: number;
	operatorEmail: string;
	operatorId: number;
	operatorName: string;
	operatorNo: string;
	operatorPhone: string;
	operatorType: string;
	remark: string;
	status: number;
	updateBy: string;
	updateById: number;
	updateTime: string;
	walletId: number;  
}

/**
 * @description 钱包详情 buildResArrayTyped
 * @url /investor/wallet/info
 */
export type OInvestorWalletInfoGetItem = {
	available: number;
	bizNo: string;
	createBy: string;
	createById: number;
	createTime: string;
	frozen: number;
	id: number;
	invested: number;
	investorName: string;
	investorNo: string;
	issuedToBroker: number;
	issuedToFundraiser: number;
	issuedToLawyer: number;
	operatorId: number;
	operatorType: string;
	productId: number;
	productName: string;
	productType: string;
	remark: string;
	updateBy: string;
	updateById: number;
	updateTime: string;
	walletNo: string;
	walletType: string;  
}

/**
 * @description 订单支付记录 buildResArrayTyped
 * @url /investor/wallet/orderpay/list
 */
export type OInvestorWalletOrderpayListGetItem = {
	afterAmount: number;
	amount: number;
	beforeAmount: number;
	channelType: string;
	createBy: string;
	createById: number;
	createTime: string;
	id: number;
	operatorEmail: string;
	operatorId: number;
	operatorName: string;
	operatorNo: string;
	operatorPhone: string;
	operatorType: string;
	remark: string;
	status: number;
	updateBy: string;
	updateById: number;
	updateTime: string;
	walletId: number;
	withdrawAccount: any;
	withdrawAccountId: number;
	withdrawNo: string;  
}

/**
 * @description 反俑记录 buildResAnyTyped
 * @url /investor/wallet/rebate/list
 */
export type OInvestorWalletRebateListGet = {
}

/**
 * @description 获取对公账户 buildResAnyTyped
 * @url /publish/corporate/account
 */
export type OPublishCorporateAccountGet = {
}

/**
 * @description 通过父id获取下级列表 buildResArrayTyped
 * @url /publish/country/children/{x}
 */
export type OPublishCountryChildrenParentIdGetItem = {
	aliasName: string;
	ancestors: string;
	childrenList: array;
	chName: string;
	createBy: string;
	createById: number;
	createTime: string;
	enName: string;
	id: number;
	parentId: number;
	phoneCode: string;
	remark: string;
	sort: number;
	updateBy: string;
	updateById: number;
	updateTime: string;  
}

/**
 * @description 获取所有国家 buildResArrayTyped
 * @url /publish/country/list
 */
export type OPublishCountryListGetItem = {
	aliasName: string;
	ancestors: string;
	childrenList: array;
	chName: string;
	createBy: string;
	createById: number;
	createTime: string;
	enName: string;
	id: number;
	parentId: number;
	phoneCode: string;
	remark: string;
	sort: number;
	updateBy: string;
	updateById: number;
	updateTime: string;  
}

/**
 * @description 上传文件-私有 buildResAnyTyped
 * @url /publish/file/private/upload
 */
export type OPublishFilePrivateUploadPost = {
}

/**
 * @description 获取私有文件签名地址 buildResAnyTyped
 * @url /publish/file/signatureUrl
 */
export type OPublishFileSignatureUrlGet = {
}

/**
 * @description 上传文件-公共 buildResAnyTyped
 * @url /publish/file/upload
 */
export type OPublishFileUploadPost = {
}

/**
 * @description 获取邀请规则 buildResAnyTyped
 * @url /publish/invitation/rule
 */
export type OPublishInvitationRuleGet = {
}

/**
 * @description 忘记密码-发送重置密码链接邮件 buildResAnyTyped
 * @url /tourist/email/forgetPasswordSend
 */
export type OTouristEmailForgetPasswordSendPost = {
}

/**
 * @description 注册-发送邮箱验证码 buildResAnyTyped
 * @url /tourist/email/registerCode
 */
export type OTouristEmailRegisterCodePost = {
}

/**
 * @description 重置密码 buildResAnyTyped
 * @url /tourist/forgetPassword
 */
export type OTouristForgetPasswordPost = {
}

/**
 * @description 登录-手机 buildResAnyTyped
 * @url /tourist/login/phone
 */
export type OTouristLoginPhonePost = {
	googleCode: boolean; // 绑定谷歌验证并已开启谷歌二次验证；该字段返回true则表示在登录时需要填写谷歌验证码，此时token不会返回。
}

/**
 * @description 登录 buildResAnyTyped
 * @url /tourist/login
 */
export type OTouristLoginPost = {
	googleCode: boolean; // 绑定谷歌验证并已开启谷歌二次验证；该字段返回true则表示在登录时需要填写谷歌验证码，此时token不会返回。
}

/**
 * @description 注册-手机 buildResAnyTyped
 * @url /tourist/register/phone
 */
export type OTouristRegisterPhonePost = {
}

/**
 * @description 注册 buildResAnyTyped
 * @url /tourist/register
 */
export type OTouristRegisterPost = {
}

/**
 * @description 注册企业微信客户端第三方应用鉴权信息 buildResAnyTyped
 * @url /wechat/agentSignature/config
 */
export type OWechatAgentSignatureConfigGet = {
}

/**
 * @description 注册企业微信客户端js接口鉴权信息 buildResAnyTyped
 * @url /wechat/jsSignature/config
 */
export type OWechatJsSignatureConfigGet = {
}

/**
 * @description 企业微信构造网页授权链接回调地址 获取用户敏感信息 需要客户端授权操作（可静默） buildResAnyTyped
 * @url /wechat/oauth2/authorize
 */
export type OWechatOauth2AuthorizeGet = {
}

export default {
	OAdminAppVersionDetailGet,
	OAdminAppVersionIdDelete,
	OAdminAppVersionListGet,
	OAdminAppVersionNameGet,
	OAdminAppVersionPost,
	OAdminAppVersionPut,
	OAdminChannelIdGet,
	OAdminChannelListGet,
	OAdminChannelPost,
	OAdminChannelPut,
	OAdminChannelResetPasswordPut,
	OAdminCommonCaptchaImageGet,
	OAdminCommonCountryChildrenParentIdGetItem,
	OAdminCommonCountryListGetItem,
	OAdminConsoleChartOriginGet,
	OAdminConsoleChartSeaDayGet,
	OAdminConsoleChartSeaGet,
	OAdminConsoleConcludeRankTypeGet,
	OAdminConsoleStatisticsInfoGet,
	OAdminContractAttrRefPost,
	OAdminContractIdDelete,
	OAdminContractIdGet,
	OAdminContractListGet,
	OAdminContractPost,
	OAdminContractPut,
	OAdminCorporateAccountIdDelete,
	OAdminCorporateAccountIdGet,
	OAdminCorporateAccountListGet,
	OAdminCorporateAccountPost,
	OAdminCorporateAccountPut,
	OAdminCouponIdGet,
	OAdminCouponInvestorListGet,
	OAdminCouponListGet,
	OAdminCouponPost,
	OAdminCouponPut,
	OAdminCouponSendInvestorPost,
	OAdminCouponWriteoffPost,
	OAdminDepositInvestorOrderListGet,
	OAdminDepositListGetItem,
	OAdminDepositPost,
	OAdminDeptAllocationRuleGet,
	OAdminDeptAllocationRulePost,
	OAdminDeptIdDelete,
	OAdminDeptIdGet,
	OAdminDeptListGet,
	OAdminDeptPost,
	OAdminDeptPut,
	OAdminFlowClonePost,
	OAdminFlowIdDelete,
	OAdminFlowIdGet,
	OAdminFlowListGet,
	OAdminFlowPost,
	OAdminFlowPut,
	OAdminFundIdGet,
	OAdminFundListGet,
	OAdminFundPost,
	OAdminFundPut,
	OAdminFundTypeListGet,
	OAdminInfoGet,
	OAdminInvestorInviteeListGet,
	OAdminInvestorListGetItem,
	OAdminInvestorOrderListGet,
	OAdminInvestorProductRelevantListGet,
	OAdminInvestorProductRelevantPost,
	OAdminInvestorRecordAddPost,
	OAdminInvestorRecordBasicGet,
	OAdminInvestorRecordUpdatePut,
	OAdminInvestorRepeatPwdEmailPost,
	OAdminInvestorTokenPost,
	OAdminInvestorWalletBankAccountGet,
	OAdminInvestorWalletBankAccountPost,
	OAdminInvestorWalletDepositListGet,
	OAdminInvestorWalletInfoIdGet,
	OAdminInvestorWalletOrderpayListGet,
	OAdminInvestorWalletRebateListGet,
	OAdminInvitationRuleGet,
	OAdminInvitationRulePost,
	OAdminLoginPost,
	OAdminMaterialExistGet,
	OAdminMaterialIdDelete,
	OAdminMaterialListGet,
	OAdminMaterialPut,
	OAdminMaterialRecoverPost,
	OAdminMaterialRecycleListGet,
	OAdminMaterialTagIdDelete,
	OAdminMaterialTagListAllGet,
	OAdminMaterialTagListGet,
	OAdminMaterialTagPost,
	OAdminMaterialTagPut,
	OAdminMaterialUploadPost,
	OAdminMenuListGetItem,
	OAdminMenuMenuIdDelete,
	OAdminMenuMenuIdGet,
	OAdminMenuPost,
	OAdminMenuPut,
	OAdminMenusGetItem,
	OAdminNotificationIdDelete,
	OAdminNotificationIdGet,
	OAdminNotificationListGet,
	OAdminNotificationPost,
	OAdminOrderBasicInfoPut,
	OAdminOrderBrokerBindPost,
	OAdminOrderBrokerListGetItem,
	OAdminOrderCancelPost,
	OAdminOrderCopywritingBindPost,
	OAdminOrderCopywritingListGetItem,
	OAdminOrderCreatePost,
	OAdminOrderCustomerBindPost,
	OAdminOrderCustomerListGetItem,
	OAdminOrderLawyerBindPost,
	OAdminOrderLawyerListGetItem,
	OAdminOrderListGetItem,
	OAdminOrderOrderNoGet,
	OAdminOrderPayListGet,
	OAdminOrderPhaseStatusPost,
	OAdminOrderProductBindPost,
	OAdminOrderStepPut,
	OAdminOrderSubContentComponentIdOrderSubIdDelete,
	OAdminOrderSubContentPost,
	OAdminOrderSubContentPut,
	OAdminOrderSubTitlePut,
	OAdminOrderSubVerifyPost,
	OAdminOrderTransferInsidePost,
	OAdminOrderTransferInsideTypeListGetItem,
	OAdminOrderWalletDepositListGet,
	OAdminOrderWalletGet,
	OAdminOrderWalletOrderpayListGet,
	OAdminOriginIdGet,
	OAdminOriginListGet,
	OAdminOriginPost,
	OAdminOriginPut,
	OAdminProductBindFlowPost,
	OAdminProductContentPut,
	OAdminProductFlowAlllistGet,
	OAdminProductFlowListGet,
	OAdminProductIdDelete,
	OAdminProductIdGet,
	OAdminProductListGetItem,
	OAdminProductPost,
	OAdminProductPut,
	OAdminProductRecycleListGet,
	OAdminProductRelevantAuditListGet,
	OAdminProductRelevantAuditPost,
	OAdminProductRelevantFileGet,
	OAdminProductRelevantFilePost,
	OAdminProductRelevantGroupGroupIdDelete,
	OAdminProductRelevantGroupListGet,
	OAdminProductRelevantGroupPost,
	OAdminProductRelevantGroupPut,
	OAdminProductRelevantGroupSortPost,
	OAdminProductRelevantIdDelete,
	OAdminProductRelevantImageGet,
	OAdminProductRelevantImagePost,
	OAdminProductRelevantLevelListGet,
	OAdminProductRelevantLevelPost,
	OAdminProductRelevantLevelPut,
	OAdminProductRelevantNewsGet,
	OAdminProductRelevantNewsPost,
	OAdminProductRelevantPut,
	OAdminProductRelevantSortPost,
	OAdminProductRelevantVideoGet,
	OAdminProductRelevantVideoPost,
	OAdminProductRevokePost,
	OAdminProductShowStatusPost,
	OAdminProductSortPut,
	OAdminPublishBankcardinfoGet,
	OAdminPublishBrokerListGetItem,
	OAdminPublishContractComponentGet,
	OAdminPublishContractListGet,
	OAdminPublishCopywritingListGetItem,
	OAdminPublishCustomerListGetItem,
	OAdminPublishDeptListGet,
	OAdminPublishDeptOwnerlistGet,
	OAdminPublishFileSignatureUrlGet,
	OAdminPublishFlowListGet,
	OAdminPublishFundListGet,
	OAdminPublishInvestorListGet,
	OAdminPublishLawyerListGetItem,
	OAdminPublishMaterialListGet,
	OAdminPublishNewsListGet,
	OAdminPublishOperatorListGet,
	OAdminPublishOriginListGet,
	OAdminPublishPhoneCodeListGetItem,
	OAdminPublishProductListGet,
	OAdminPublishProductSaleListGet,
	OAdminPublishProductTypeListGet,
	OAdminPublishPublishSysUserCityListGet,
	OAdminPublishReasonListTypeGet,
	OAdminPublishSeaListGet,
	OAdminPublishSysChannelListGet,
	OAdminPublishSysUserListByLoginUserGet,
	OAdminPublishTagListGet,
	OAdminPublishThreadListByLoginUserGet,
	OAdminPublishThreadListGet,
	OAdminPublishTodoCategoryListGet,
	OAdminPublishUploadFilePost,
	OAdminPublishUploadPrivateFilePost,
	OAdminReasonIdDelete,
	OAdminReasonIdGet,
	OAdminReasonListTypeGet,
	OAdminReasonPost,
	OAdminReasonPut,
	OAdminReasonStatusPut,
	OAdminRebateListGet,
	OAdminRebatePost,
	OAdminReserveAuditPost,
	OAdminReserveListGet,
	OAdminRoleListAllGetItem,
	OAdminRoleListGetItem,
	OAdminRolePermsPut,
	OAdminRolePost,
	OAdminRolePut,
	OAdminRoleRoleIdDelete,
	OAdminRoleRoleIdGet,
	OAdminSeaIdDelete,
	OAdminSeaIdGet,
	OAdminSeaJoinUserJoinIdDelete,
	OAdminSeaJoinUserListGet,
	OAdminSeaJoinUserPost,
	OAdminSeaListGet,
	OAdminSeaPost,
	OAdminSeaPut,
	OAdminTagGroupChoicePut,
	OAdminTagGroupGroupIdDelete,
	OAdminTagGroupListGet,
	OAdminTagGroupPost,
	OAdminTagGroupPut,
	OAdminTagGroupStatusPut,
	OAdminTagListByGroupIdGet,
	OAdminTagPost,
	OAdminTagPut,
	OAdminTagStatusPut,
	OAdminTagSyncPost,
	OAdminTagTagIdDelete,
	OAdminThreadAddDeptToThreadPost,
	OAdminThreadAddThreadToDeptPost,
	OAdminThreadAllListGet,
	OAdminThreadAllocationPost,
	OAdminThreadApplyAuditPost,
	OAdminThreadApplyPost,
	OAdminThreadAuditDetailIdGet,
	OAdminThreadAuditListTypeGet,
	OAdminThreadAuditPost,
	OAdminThreadBatchAddDeptToThreadPost,
	OAdminThreadBatchAllocationPost,
	OAdminThreadCallPhonePost,
	OAdminThreadCheckDxLoginPost,
	OAdminThreadCustomerProductPost,
	OAdminThreadCustomerStatusPost,
	OAdminThreadDeletePost,
	OAdminThreadDelThreadForDeptPost,
	OAdminThreadDeptListGet,
	OAdminThreadDownloadPost,
	OAdminThreadEmployeeConcludeDetailGet,
	OAdminThreadEmployeeConcludeIdDelete,
	OAdminThreadEmployeeConcludeListGet,
	OAdminThreadEmployeeConcludePost,
	OAdminThreadEmployeeConcludePut,
	OAdminThreadEmployeeConcludeRankTypeGet,
	OAdminThreadExportListGet,
	OAdminThreadExportPost,
	OAdminThreadExternalExternalUserIdGet,
	OAdminThreadFollowRecordGet,
	OAdminThreadFollowRecordPost,
	OAdminThreadFollowStatusPut,
	OAdminThreadGiveupPost,
	OAdminThreadIdGet,
	OAdminThreadImportantPost,
	OAdminThreadListGet,
	OAdminThreadMergeBaseInfoPost,
	OAdminThreadMergeFollowRecordPost,
	OAdminThreadMergePost,
	OAdminThreadMineListGet,
	OAdminThreadPersonageTagAllDelete,
	OAdminThreadPersonageTagAlllistGet,
	OAdminThreadPersonageTagIdDelete,
	OAdminThreadPersonageTagMinelistGet,
	OAdminThreadPersonageTagPost,
	OAdminThreadPhoneHashcodePost,
	OAdminThreadPost,
	OAdminThreadPrimaryFollowerListGet,
	OAdminThreadPrimaryFollowerPost,
	OAdminThreadPublicAllListGet,
	OAdminThreadPut,
	OAdminThreadReceivePost,
	OAdminThreadRecycleListGet,
	OAdminThreadRevokePost,
	OAdminThreadSmsPhonePost,
	OAdminThreadStatusListGet,
	OAdminThreadTagPut,
	OAdminThreadTransferPost,
	OAdminThreadTranStatusApplyPost,
	OAdminThreadTranStatusPost,
	OAdminThreadUnfollowRemindInfoGet,
	OAdminThreadUnfollowRemindListGet,
	OAdminThreadUserGroupListGet,
	OAdminThreadUserGroupPost,
	OAdminTodoBatchPost,
	OAdminTodoChangeListGet,
	OAdminTodoCommentListGet,
	OAdminTodoCommentPost,
	OAdminTodoCompletePost,
	OAdminTodoDetailCompletePost,
	OAdminTodoDetailInfoGet,
	OAdminTodoDetailListGet,
	OAdminTodoDetailPost,
	OAdminTodoDetailPut,
	OAdminTodoInfoGet,
	OAdminTodoLeaderListGet,
	OAdminTodoListGet,
	OAdminTodoOwnerDeptListGet,
	OAdminTodoPost,
	OAdminTodoPut,
	OAdminTodoReplyPost,
	OAdminTodoSubCompletePost,
	OAdminTodoSubDetailGet,
	OAdminTodoSubListGet,
	OAdminTodoSubPost,
	OAdminTodoSubPut,
	OAdminUpdatePwdPut,
	OAdminUserListGetItem,
	OAdminUserMoveUserPost,
	OAdminUserPost,
	OAdminUserProfilePut,
	OAdminUserPut,
	OAdminUserRelevantUserToDeptPost,
	OAdminUserResetPwdPut,
	OAdminUserRolekeyGet,
	OAdminUserUserIdDelete,
	OAdminUserUserIdGet,
	OAdminWebloginBindPost,
	OAdminWebloginSendEmailPost,
	OAdminWithdrawIdGet,
	OAdminWithdrawListGetItem,
	OAdminWithdrawPassPost,
	OAdminWithdrawRejectPost,
	OAdminWwloginUrlGet,
	OChannelFollowNotifyRecordGet,
	OChannelInfoGet,
	OChannelLoginPost,
	OChannelPasswordPost,
	OChannelThreadDetailGet,
	OChannelThreadFollowRecordGet,
	OChannelThreadListGet,
	OChannelThreadPost,
	OCommonProductIdGetItem,
	OCommonProductListGetItem,
	OCommonProductRelevantContentGet,
	OCommonSendPhoneCodePost,
	OInvestorAvatarModifyPost,
	OInvestorBankAccountBindPost,
	OInvestorBankAccountGet,
	OInvestorBankAccountUnbindPost,
	OInvestorBindEmailPost,
	OInvestorBrokerListGet,
	OInvestorChooseIdentityPost,
	OInvestorCollectionCollectionNoDelete,
	OInvestorCollectionLiveGet,
	OInvestorCollectionNewsGet,
	OInvestorCollectionPost,
	OInvestorCollectionProjectGet,
	OInvestorCopywritingListGet,
	OInvestorCouponGet,
	OInvestorCouponReceivePost,
	OInvestorCouponTransferGet,
	OInvestorCouponTransferListGet,
	OInvestorCouponTransferPost,
	OInvestorCustomerListGet,
	OInvestorEb5fundListGet,
	OInvestorEmailBindPost,
	OInvestorEmailUnbindPost,
	OInvestorFileListGet,
	OInvestorHistoryFileListGet,
	OInvestorInvitationInfoGet,
	OInvestorInvitationListGet,
	OInvestorInvitationOrderListGet,
	OInvestorLawyerListGet,
	OInvestorModifyPasswordPost,
	OInvestorNotificationGet,
	OInvestorNotificationIdGet,
	OInvestorNotificationReadPost,
	OInvestorNotificationUnreadCountGet,
	OInvestorOrderCancelPost,
	OInvestorOrderCreatePost,
	OInvestorOrderListGetItem,
	OInvestorOrderOperRecordGet,
	OInvestorOrderOrderIdGet,
	OInvestorOrderReserveGet,
	OInvestorOrderReservePost,
	OInvestorOrderSignCallbackPost,
	OInvestorOrderStatusOrderSubIdGet,
	OInvestorOrderStepPut,
	OInvestorProductRelevantPermsPost,
	OInvestorProfileDetailGet,
	OInvestorProfileModifyPost,
	OInvestorSealCreatePost,
	OInvestorSealListGetItem,
	OInvestorSealRecordInfoPost,
	OInvestorSealRecordWithdrawPost,
	OInvestorServiceListGet,
	OInvestorSubscribeInfoGetItem,
	OInvestorSubscribePost,
	OInvestorTodoListGet,
	OInvestorUnbindEmailPost,
	OInvestorUnsubscribePost,
	OInvestorWalletDepositListGetItem,
	OInvestorWalletInfoGetItem,
	OInvestorWalletOrderpayListGetItem,
	OInvestorWalletRebateListGet,
	OPublishCorporateAccountGet,
	OPublishCountryChildrenParentIdGetItem,
	OPublishCountryListGetItem,
	OPublishFilePrivateUploadPost,
	OPublishFileSignatureUrlGet,
	OPublishFileUploadPost,
	OPublishInvitationRuleGet,
	OTouristEmailForgetPasswordSendPost,
	OTouristEmailRegisterCodePost,
	OTouristForgetPasswordPost,
	OTouristLoginPhonePost,
	OTouristLoginPost,
	OTouristRegisterPhonePost,
	OTouristRegisterPost,
	OWechatAgentSignatureConfigGet,
	OWechatJsSignatureConfigGet,
	OWechatOauth2AuthorizeGet,
}
