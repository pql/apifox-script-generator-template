import {get, post, put, del} from '@/api/http'
import type {
	IAdminAppVersionDetailGet,
	IAdminAppVersionListGet,
	IAdminAppVersionNameGet,
	IAdminAppVersionPost,
	IAdminAppVersionPut,
	IAdminChannelListGet,
	IAdminChannelPost,
	IAdminChannelPut,
	IAdminChannelResetPasswordPut,
	IAdminCommonCaptchaImageGet,
	IAdminCommonCountryListGet,
	IAdminConsoleChartOriginGet,
	IAdminConsoleChartSeaDayGet,
	IAdminConsoleChartSeaGet,
	IAdminConsoleStatisticsInfoGet,
	IAdminContractAttrRefPost,
	IAdminContractListGet,
	IAdminContractPost,
	IAdminContractPut,
	IAdminCorporateAccountListGet,
	IAdminCorporateAccountPost,
	IAdminCorporateAccountPut,
	IAdminCouponInvestorListGet,
	IAdminCouponListGet,
	IAdminCouponPost,
	IAdminCouponPut,
	IAdminCouponSendInvestorPost,
	IAdminCouponWriteoffPost,
	IAdminDepositInvestorOrderListGet,
	IAdminDepositListGet,
	IAdminDepositPost,
	IAdminDeptAllocationRuleGet,
	IAdminDeptAllocationRulePost,
	IAdminDeptListGet,
	IAdminDeptPost,
	IAdminDeptPut,
	IAdminFlowClonePost,
	IAdminFlowListGet,
	IAdminFlowPost,
	IAdminFlowPut,
	IAdminFundListGet,
	IAdminFundPost,
	IAdminFundPut,
	IAdminFundTypeListGet,
	IAdminInfoGet,
	IAdminInvestorInviteeListGet,
	IAdminInvestorListGet,
	IAdminInvestorOrderListGet,
	IAdminInvestorProductRelevantListGet,
	IAdminInvestorProductRelevantPost,
	IAdminInvestorRecordAddPost,
	IAdminInvestorRecordBasicGet,
	IAdminInvestorRecordUpdatePut,
	IAdminInvestorRepeatPwdEmailPost,
	IAdminInvestorTokenPost,
	IAdminInvestorWalletBankAccountGet,
	IAdminInvestorWalletBankAccountPost,
	IAdminInvestorWalletDepositListGet,
	IAdminInvestorWalletOrderpayListGet,
	IAdminInvestorWalletRebateListGet,
	IAdminInvitationRuleGet,
	IAdminInvitationRulePost,
	IAdminLoginPost,
	IAdminMaterialExistGet,
	IAdminMaterialListGet,
	IAdminMaterialPut,
	IAdminMaterialRecoverPost,
	IAdminMaterialRecycleListGet,
	IAdminMaterialTagListAllGet,
	IAdminMaterialTagListGet,
	IAdminMaterialTagPost,
	IAdminMaterialTagPut,
	IAdminMaterialUploadPostFormData,
	IAdminMenuListGet,
	IAdminMenuPost,
	IAdminMenuPut,
	IAdminMenusGet,
	IAdminNotificationListGet,
	IAdminNotificationPost,
	IAdminOrderBasicInfoPut,
	IAdminOrderBrokerBindPost,
	IAdminOrderBrokerListGet,
	IAdminOrderCancelPost,
	IAdminOrderCopywritingBindPost,
	IAdminOrderCopywritingListGet,
	IAdminOrderCreatePost,
	IAdminOrderCustomerBindPost,
	IAdminOrderCustomerListGet,
	IAdminOrderLawyerBindPost,
	IAdminOrderLawyerListGet,
	IAdminOrderListGet,
	IAdminOrderPayListGet,
	IAdminOrderPhaseStatusPost,
	IAdminOrderProductBindPost,
	IAdminOrderStepPut,
	IAdminOrderSubContentPost,
	IAdminOrderSubContentPut,
	IAdminOrderSubTitlePut,
	IAdminOrderSubVerifyPost,
	IAdminOrderTransferInsidePost,
	IAdminOrderTransferInsideTypeListGet,
	IAdminOrderWalletDepositListGet,
	IAdminOrderWalletGet,
	IAdminOrderWalletOrderpayListGet,
	IAdminOriginListGet,
	IAdminOriginPost,
	IAdminOriginPut,
	IAdminProductBindFlowPost,
	IAdminProductContentPut,
	IAdminProductFlowAlllistGet,
	IAdminProductFlowListGet,
	IAdminProductListGet,
	IAdminProductPost,
	IAdminProductPut,
	IAdminProductRecycleListGet,
	IAdminProductRelevantAuditListGet,
	IAdminProductRelevantAuditPost,
	IAdminProductRelevantFileGet,
	IAdminProductRelevantFilePost,
	IAdminProductRelevantGroupGroupIdDelete,
	IAdminProductRelevantGroupGroupIdDeleteGroup,
	IAdminProductRelevantGroupListGet,
	IAdminProductRelevantGroupPost,
	IAdminProductRelevantGroupPut,
	IAdminProductRelevantGroupSortPost,
	IAdminProductRelevantImageGet,
	IAdminProductRelevantImagePost,
	IAdminProductRelevantLevelListGet,
	IAdminProductRelevantLevelPost,
	IAdminProductRelevantLevelPut,
	IAdminProductRelevantNewsGet,
	IAdminProductRelevantNewsPost,
	IAdminProductRelevantPut,
	IAdminProductRelevantSortPost,
	IAdminProductRelevantVideoGet,
	IAdminProductRelevantVideoPost,
	IAdminProductRevokePost,
	IAdminProductShowStatusPost,
	IAdminProductSortPut,
	IAdminPublishBankcardinfoGet,
	IAdminPublishBrokerListGet,
	IAdminPublishContractComponentGet,
	IAdminPublishContractListGet,
	IAdminPublishCopywritingListGet,
	IAdminPublishCustomerListGet,
	IAdminPublishDeptListGet,
	IAdminPublishDeptOwnerlistGet,
	IAdminPublishFileSignatureUrlGet,
	IAdminPublishFlowListGet,
	IAdminPublishFundListGet,
	IAdminPublishInvestorListGet,
	IAdminPublishLawyerListGet,
	IAdminPublishMaterialListGet,
	IAdminPublishNewsListGet,
	IAdminPublishOperatorListGet,
	IAdminPublishOriginListGet,
	IAdminPublishPhoneCodeListGet,
	IAdminPublishProductListGet,
	IAdminPublishProductSaleListGet,
	IAdminPublishProductTypeListGet,
	IAdminPublishPublishSysUserCityListGet,
	IAdminPublishSeaListGet,
	IAdminPublishSysChannelListGet,
	IAdminPublishSysUserListByLoginUserGet,
	IAdminPublishTagListGet,
	IAdminPublishThreadListByLoginUserGet,
	IAdminPublishThreadListGet,
	IAdminPublishTodoCategoryListGet,
	IAdminPublishUploadFilePostFormData,
	IAdminPublishUploadPrivateFilePostFormData,
	IAdminReasonListTypeGet,
	IAdminReasonListTypeGetGroup,
	IAdminReasonPost,
	IAdminReasonPut,
	IAdminReasonStatusPut,
	IAdminRebateListGet,
	IAdminRebatePost,
	IAdminReserveAuditPost,
	IAdminReserveListGet,
	IAdminRoleListAllGet,
	IAdminRoleListGet,
	IAdminRolePermsPut,
	IAdminRolePost,
	IAdminRolePut,
	IAdminSeaJoinUserListGet,
	IAdminSeaJoinUserPost,
	IAdminSeaListGet,
	IAdminSeaPost,
	IAdminSeaPut,
	IAdminTagGroupChoicePut,
	IAdminTagGroupListGet,
	IAdminTagGroupPost,
	IAdminTagGroupPut,
	IAdminTagGroupStatusPut,
	IAdminTagListByGroupIdGet,
	IAdminTagPost,
	IAdminTagPut,
	IAdminTagStatusPut,
	IAdminTagSyncPost,
	IAdminThreadAddDeptToThreadPost,
	IAdminThreadAddThreadToDeptPost,
	IAdminThreadAllListGet,
	IAdminThreadAllocationPost,
	IAdminThreadApplyAuditPost,
	IAdminThreadApplyPost,
	IAdminThreadAuditListTypeGet,
	IAdminThreadAuditListTypeGetGroup,
	IAdminThreadAuditPost,
	IAdminThreadBatchAddDeptToThreadPost,
	IAdminThreadBatchAllocationPost,
	IAdminThreadCallPhonePost,
	IAdminThreadCheckDxLoginPost,
	IAdminThreadCustomerProductPost,
	IAdminThreadCustomerStatusPost,
	IAdminThreadDeletePost,
	IAdminThreadDelThreadForDeptPost,
	IAdminThreadDeptListGet,
	IAdminThreadDownloadPost,
	IAdminThreadEmployeeConcludeDetailGet,
	IAdminThreadEmployeeConcludeListGet,
	IAdminThreadEmployeeConcludePost,
	IAdminThreadEmployeeConcludePut,
	IAdminThreadExportListGet,
	IAdminThreadExportPost,
	IAdminThreadFollowRecordGet,
	IAdminThreadFollowRecordPost,
	IAdminThreadFollowStatusPut,
	IAdminThreadGiveupPost,
	IAdminThreadImportantPost,
	IAdminThreadListGet,
	IAdminThreadMergeBaseInfoPost,
	IAdminThreadMergeFollowRecordPost,
	IAdminThreadMergePost,
	IAdminThreadMineListGet,
	IAdminThreadPersonageTagAllDelete,
	IAdminThreadPersonageTagAlllistGet,
	IAdminThreadPersonageTagMinelistGet,
	IAdminThreadPersonageTagPost,
	IAdminThreadPhoneHashcodePost,
	IAdminThreadPost,
	IAdminThreadPrimaryFollowerListGet,
	IAdminThreadPrimaryFollowerPost,
	IAdminThreadPublicAllListGet,
	IAdminThreadPut,
	IAdminThreadReceivePost,
	IAdminThreadRecycleListGet,
	IAdminThreadRevokePost,
	IAdminThreadSmsPhonePost,
	IAdminThreadStatusListGet,
	IAdminThreadTagPut,
	IAdminThreadTransferPost,
	IAdminThreadTranStatusApplyPost,
	IAdminThreadTranStatusPost,
	IAdminThreadUnfollowRemindInfoGet,
	IAdminThreadUnfollowRemindListGet,
	IAdminThreadUserGroupListGet,
	IAdminThreadUserGroupPost,
	IAdminTodoBatchPost,
	IAdminTodoChangeListGet,
	IAdminTodoCommentListGet,
	IAdminTodoCommentPost,
	IAdminTodoCompletePost,
	IAdminTodoDetailCompletePost,
	IAdminTodoDetailInfoGet,
	IAdminTodoDetailListGet,
	IAdminTodoDetailPost,
	IAdminTodoDetailPut,
	IAdminTodoInfoGet,
	IAdminTodoLeaderListGet,
	IAdminTodoListGet,
	IAdminTodoOwnerDeptListGet,
	IAdminTodoPost,
	IAdminTodoPut,
	IAdminTodoReplyPost,
	IAdminTodoSubCompletePost,
	IAdminTodoSubDetailGet,
	IAdminTodoSubListGet,
	IAdminTodoSubPost,
	IAdminTodoSubPut,
	IAdminUpdatePwdPut,
	IAdminUserListGet,
	IAdminUserMoveUserPost,
	IAdminUserPost,
	IAdminUserProfilePut,
	IAdminUserPut,
	IAdminUserRelevantUserToDeptPost,
	IAdminUserResetPwdPut,
	IAdminUserRolekeyGet,
	IAdminWebloginBindPost,
	IAdminWebloginSendEmailPost,
	IAdminWithdrawListGet,
	IAdminWithdrawPassPost,
	IAdminWithdrawRejectPost,
	IAdminWwloginUrlGet,
	IChannelFollowNotifyRecordGet,
	IChannelInfoGet,
	IChannelLoginPost,
	IChannelPasswordPost,
	IChannelThreadDetailGet,
	IChannelThreadFollowRecordGet,
	IChannelThreadListGet,
	IChannelThreadPost,
	ICommonProductListGet,
	ICommonProductRelevantContentGet,
	ICommonSendPhoneCodePost,
	IInvestorAvatarModifyPostFormData,
	IInvestorBankAccountBindPost,
	IInvestorBankAccountGet,
	IInvestorBankAccountUnbindPost,
	IInvestorBindEmailPost,
	IInvestorBrokerListGet,
	IInvestorChooseIdentityPost,
	IInvestorCollectionLiveGet,
	IInvestorCollectionNewsGet,
	IInvestorCollectionPost,
	IInvestorCollectionProjectGet,
	IInvestorCopywritingListGet,
	IInvestorCouponGet,
	IInvestorCouponReceivePost,
	IInvestorCouponTransferGet,
	IInvestorCouponTransferListGet,
	IInvestorCouponTransferPost,
	IInvestorCustomerListGet,
	IInvestorEb5fundListGet,
	IInvestorEmailBindPost,
	IInvestorEmailUnbindPost,
	IInvestorFileListGet,
	IInvestorHistoryFileListGet,
	IInvestorInvitationInfoGet,
	IInvestorInvitationListGet,
	IInvestorInvitationOrderListGet,
	IInvestorLawyerListGet,
	IInvestorModifyPasswordPost,
	IInvestorNotificationGet,
	IInvestorNotificationReadPost,
	IInvestorNotificationUnreadCountGet,
	IInvestorOrderCancelPost,
	IInvestorOrderCreatePost,
	IInvestorOrderListGet,
	IInvestorOrderOperRecordGet,
	IInvestorOrderReserveGet,
	IInvestorOrderReservePost,
	IInvestorOrderSignCallbackPost,
	IInvestorOrderStepPut,
	IInvestorProductRelevantPermsPost,
	IInvestorProfileDetailGet,
	IInvestorProfileModifyPost,
	IInvestorSealCreatePost,
	IInvestorSealListGet,
	IInvestorSealRecordInfoPost,
	IInvestorSealRecordWithdrawPost,
	IInvestorServiceListGet,
	IInvestorSubscribeInfoGet,
	IInvestorSubscribePost,
	IInvestorTodoListGet,
	IInvestorUnbindEmailPost,
	IInvestorUnsubscribePost,
	IInvestorWalletDepositListGet,
	IInvestorWalletInfoGet,
	IInvestorWalletOrderpayListGet,
	IInvestorWalletRebateListGet,
	IPublishCorporateAccountGet,
	IPublishCountryListGet,
	IPublishFilePrivateUploadPostFormData,
	IPublishFileSignatureUrlGet,
	IPublishFileUploadPostFormData,
	IPublishInvitationRuleGet,
	ITouristEmailForgetPasswordSendPost,
	ITouristEmailRegisterCodePost,
	ITouristForgetPasswordPost,
	ITouristLoginPhonePost,
	ITouristLoginPost,
	ITouristRegisterPhonePost,
	ITouristRegisterPost,
	IWechatAgentSignatureConfigGet,
	IWechatJsSignatureConfigGet,
	IWechatOauth2AuthorizeGet,
} from '@/api/request'
import type {
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
} from '@/api/response'
/**
 * @description 获取版本详情 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 
 * @return Promise<OAdminAppVersionDetailGet>
 */
export const adminAppVersionDetailGet = async (params?: IAdminAppVersionDetailGet) => {
	return get<OAdminAppVersionDetailGet>(`/admin/app/version/detail`,{
		params
	})
}
/**
 * @description 删除版本 buildFnPathCode
 * @path {string id 必填: }
 * @return Promise<OAdminAppVersionIdDelete>
 */
export const adminAppVersionIdDelete = async (id: string) => {
	return del<OAdminAppVersionIdDelete>(`/admin/app/version/${id}`)
}
/**
 * @description 获取版本列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminAppVersionListGet>
 */
export const adminAppVersionListGet = async (params?: IAdminAppVersionListGet) => {
	return get<OAdminAppVersionListGet>(`/admin/app/version/list`,{
		params
	})
}
/**
 * @description 获取版本号 buildFnGetOrPostCode
 * 
 * @param {string} params.url 必填: 地址
 * @return Promise<OAdminAppVersionNameGet>
 */
export const adminAppVersionNameGet = async (params?: IAdminAppVersionNameGet) => {
	return get<OAdminAppVersionNameGet>(`/admin/app/version/name`,{
		params
	})
}
/**
 * @description 添加版本 buildFnGetOrPostCode
 * 
 * @param {string} params.content 可选: 更新描述
 * @param {number} params.isForce 可选: 是否强制更新 1-强制 0-不强制
 * @param {string} params.name 可选: 标题描述
 * @param {string} params.url 必填: app地址
 * @return Promise<OAdminAppVersionPost>
 */
export const adminAppVersionPost = async (params?: IAdminAppVersionPost) => {
	return post<OAdminAppVersionPost>(`/admin/app/version`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改版本 buildFnGetOrPostCode
 * 
 * @param {string} params.content 可选: 更新描述
 * @param {number} params.id 必填: ID
 * @param {number} params.isForce 可选: 是否强制更新 1-强制 0-不强制
 * @param {string} params.name 可选: 标题描述
 * @param {string} params.url 必填: app地址
 * @return Promise<OAdminAppVersionPut>
 */
export const adminAppVersionPut = async (params?: IAdminAppVersionPut) => {
	return put<OAdminAppVersionPut>(`/admin/app/version`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取渠道详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminChannelIdGet>
 */
export const adminChannelIdGet = async (id: number) => {
	return get<OAdminChannelIdGet>(`/admin/channel/${id}`)
}
/**
 * @description 获取渠道列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @return Promise<OAdminChannelListGet>
 */
export const adminChannelListGet = async (params?: IAdminChannelListGet) => {
	return get<OAdminChannelListGet>(`/admin/channel/list`,{
		params
	})
}
/**
 * @description 添加渠道 buildFnGetOrPostCode
 * 
 * @param {string} params.avatar 可选: 
 * @param {any[]} params.brokerageList 可选: 佣金阶梯
 * @param {string} params.channelName 必填: 
 * @param {string} params.password 必填: 
 * @param {string} params.phone 必填: 
 * @param {string} params.remark 可选: 
 * @param {number} params.status 必填: 状态  0-正常 1-停用
 * @return Promise<OAdminChannelPost>
 */
export const adminChannelPost = async (params?: IAdminChannelPost) => {
	return post<OAdminChannelPost>(`/admin/channel`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑渠道 buildFnGetOrPostCode
 * 
 * @param {string} params.avatar 可选: 
 * @param {any[]} params.brokerageList 可选: 佣金阶梯
 * @param {string} params.channelName 必填: 
 * @param {number} params.id 必填: 
 * @param {string} params.phone 必填: 
 * @param {string} params.remark 可选: 
 * @param {number} params.status 必填: 状态  0-正常 1-停用
 * @return Promise<OAdminChannelPut>
 */
export const adminChannelPut = async (params?: IAdminChannelPut) => {
	return put<OAdminChannelPut>(`/admin/channel`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 重置密码 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 渠道ID
 * @param {string} params.password 必填: 密码
 * @return Promise<OAdminChannelResetPasswordPut>
 */
export const adminChannelResetPasswordPut = async (params?: IAdminChannelResetPasswordPut) => {
	return put<OAdminChannelResetPasswordPut>(`/admin/channel/resetPassword`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 生成图形验证码 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminCommonCaptchaImageGet>
 */
export const adminCommonCaptchaImageGet = async (params?: IAdminCommonCaptchaImageGet) => {
	return get<OAdminCommonCaptchaImageGet>(`/admin/common/captchaImage`,{
		params
	})
}
/**
 * @description 通过父id获取下级列表 buildFnPathCode
 * @path {number parentId 必填: }
 * @return Promise<OAdminCommonCountryChildrenParentIdGetItem[]>
 */
export const adminCommonCountryChildrenParentIdGet = async (parentId: number) => {
	return get<OAdminCommonCountryChildrenParentIdGetItem[]>(`/admin/common/country/children/${parentId}`)
}
/**
 * @description 获取所有国家 buildFnArrayCode
 * 
 * @param {string} params.chName 可选: }
 * @return Promise<OAdminCommonCountryListGetItem>
 */
export const adminCommonCountryListGet = async (params?: IAdminCommonCountryListGet) => {
	return get<OAdminCommonCountryListGetItem[]>(`/admin/common/country/list`, {
		params
	})
}
/**
 * @description 获取来源统计数据 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminConsoleChartOriginGet>
 */
export const adminConsoleChartOriginGet = async (params?: IAdminConsoleChartOriginGet) => {
	return get<OAdminConsoleChartOriginGet>(`/admin/console/chart/origin`,{
		params
	})
}
/**
 * @description 获取公海日期统计数据 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminConsoleChartSeaDayGet>
 */
export const adminConsoleChartSeaDayGet = async (params?: IAdminConsoleChartSeaDayGet) => {
	return get<OAdminConsoleChartSeaDayGet>(`/admin/console/chart/seaDay`,{
		params
	})
}
/**
 * @description 获取公海统计数据 buildFnGetOrPostCode
 * 
 * @param {number} params.followStatus 可选: 
 * @param {string} params.city 可选: 
 * @param {string} params.province 可选: 
 * @return Promise<OAdminConsoleChartSeaGet>
 */
export const adminConsoleChartSeaGet = async (params?: IAdminConsoleChartSeaGet) => {
	return get<OAdminConsoleChartSeaGet>(`/admin/console/chart/sea`,{
		params
	})
}
/**
 * @description 获取签单排行榜 buildFnPathCode
 * @path {string type 必填: all-总排行  curMonth-当月 preMonth-上月 threeMonth-近3月}
 * @return Promise<OAdminConsoleConcludeRankTypeGet>
 */
export const adminConsoleConcludeRankTypeGet = async (type: string) => {
	return get<OAdminConsoleConcludeRankTypeGet>(`/admin/console/conclude/rank/${type}`)
}
/**
 * @description 获取控制台统计信息 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminConsoleStatisticsInfoGet>
 */
export const adminConsoleStatisticsInfoGet = async (params?: IAdminConsoleStatisticsInfoGet) => {
	return get<OAdminConsoleStatisticsInfoGet>(`/admin/console/statistics/info`,{
		params
	})
}
/**
 * @description 设置合同 buildFnGetOrPostCode
 * 
 * @param {any} params.attrRef 必填: 合同坐标组件配置信息
 * @param {string} params.id 必填: 合同ID
 * @return Promise<OAdminContractAttrRefPost>
 */
export const adminContractAttrRefPost = async (params?: IAdminContractAttrRefPost) => {
	return post<OAdminContractAttrRefPost>(`/admin/contract/attrRef`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除合同 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminContractIdDelete>
 */
export const adminContractIdDelete = async (id: number) => {
	return del<OAdminContractIdDelete>(`/admin/contract/${id}`)
}
/**
 * @description 合同详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminContractIdGet>
 */
export const adminContractIdGet = async (id: number) => {
	return get<OAdminContractIdGet>(`/admin/contract/${id}`)
}
/**
 * @description 合同列表 buildFnGetOrPostCode
 * 
 * @param {string} params.contractNo 可选: 合同编号
 * @param {string} params.title 可选: 合同标题
 * @param {number} params.createById 可选: 创建人
 * @param {string} params.createTimeStart 可选: 开始时间
 * @param {string} params.createTimeEnd 可选: 结束时间
 * @param {number} params.flowId 可选: 流程ID
 * @return Promise<OAdminContractListGet>
 */
export const adminContractListGet = async (params?: IAdminContractListGet) => {
	return get<OAdminContractListGet>(`/admin/contract/list`,{
		params
	})
}
/**
 * @description 新增合同 buildFnGetOrPostCode
 * 
 * @param {string} params.remark 可选: 备注信息
 * @param {string} params.title 必填: 合同标题
 * @param {string} params.url 必填: 合同文件地址
 * @return Promise<OAdminContractPost>
 */
export const adminContractPost = async (params?: IAdminContractPost) => {
	return post<OAdminContractPost>(`/admin/contract`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑合同 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 合同ID
 * @param {string} params.remark 必填: 备注信息
 * @param {string} params.title 必填: 合同标题
 * @param {string} params.url 必填: 合同文件地址
 * @return Promise<OAdminContractPut>
 */
export const adminContractPut = async (params?: IAdminContractPut) => {
	return put<OAdminContractPut>(`/admin/contract`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除账户 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminCorporateAccountIdDelete>
 */
export const adminCorporateAccountIdDelete = async (id: number) => {
	return del<OAdminCorporateAccountIdDelete>(`/admin/corporate/account/${id}`)
}
/**
 * @description 账户详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminCorporateAccountIdGet>
 */
export const adminCorporateAccountIdGet = async (id: number) => {
	return get<OAdminCorporateAccountIdGet>(`/admin/corporate/account/${id}`)
}
/**
 * @description 账户列表 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0-正常 1-禁用
 * @param {string} params.type 可选: 类型 bank-银行 wechat-微信 alipay-支付宝
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @return Promise<OAdminCorporateAccountListGet>
 */
export const adminCorporateAccountListGet = async (params?: IAdminCorporateAccountListGet) => {
	return get<OAdminCorporateAccountListGet>(`/admin/corporate/account/list`,{
		params
	})
}
/**
 * @description 添加账户 buildFnGetOrPostCode
 * 
 * @param {string} params.bankName 必填: 开户行
 * @param {string} params.bankNumber 必填: 开户账号
 * @param {string} params.bankUserName 必填: 开户户名
 * @param {string} params.remark 可选: 
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @param {string} params.type 必填: 类型 bank-银行 wechat-微信 alipay-支付宝
 * @return Promise<OAdminCorporateAccountPost>
 */
export const adminCorporateAccountPost = async (params?: IAdminCorporateAccountPost) => {
	return post<OAdminCorporateAccountPost>(`/admin/corporate/account`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑账户 buildFnGetOrPostCode
 * 
 * @param {string} params.bankName 必填: 开户行
 * @param {string} params.bankNumber 必填: 开户账号
 * @param {string} params.bankUserName 必填: 开户户名
 * @param {number} params.id 必填: 
 * @param {string} params.remark 可选: 
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @return Promise<OAdminCorporateAccountPut>
 */
export const adminCorporateAccountPut = async (params?: IAdminCorporateAccountPut) => {
	return put<OAdminCorporateAccountPut>(`/admin/corporate/account`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 优惠券详情 buildFnPathCode
 * @path {string id 必填: }
 * @return Promise<OAdminCouponIdGet>
 */
export const adminCouponIdGet = async (id: string) => {
	return get<OAdminCouponIdGet>(`/admin/coupon/${id}`)
}
/**
 * @description 优惠券投资者列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.investorNo 可选: 
 * @param {string} params.investorName 可选: 
 * @param {number} params.couponId 可选: 
 * @return Promise<OAdminCouponInvestorListGet>
 */
export const adminCouponInvestorListGet = async (params?: IAdminCouponInvestorListGet) => {
	return get<OAdminCouponInvestorListGet>(`/admin/coupon/investor/list`,{
		params
	})
}
/**
 * @description 优惠券列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {string} params.pageNum 可选: 
 * @param {string} params.pageSize 可选: 
 * @return Promise<OAdminCouponListGet>
 */
export const adminCouponListGet = async (params?: IAdminCouponListGet) => {
	return get<OAdminCouponListGet>(`/admin/coupon/list`,{
		params
	})
}
/**
 * @description 新增优惠券 buildFnGetOrPostCode
 * 
 * @param {string} params.category 可选: 类别 PLATFORM:平台 OTHER:其他
 * @param {string} params.title 可选: 标题
 * @param {number} params.quantity 可选: 总数量
 * @param {string} params.desc 可选: 描述
 * @param {string} params.imgCover 可选: 封面
 * @param {number} params.couponType 可选: 类型 -1-未知 0-预定费 1-咨询费 2-律师费
 * @param {number} params.amount 可选: 金额
 * @param {string} params.currency 可选: 币种类型
 * @return Promise<OAdminCouponPost>
 */
export const adminCouponPost = async (params?: IAdminCouponPost) => {
	return post<OAdminCouponPost>(`/admin/coupon`,{
		params
	})
}
/**
 * @description 编辑优惠券 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 标题
 * @param {number} params.quantity 可选: 总数量
 * @param {string} params.desc 可选: 描述
 * @param {string} params.imgCover 可选: 封面
 * @param {number} params.id 可选: ID
 * @param {number} params.amount 可选: 金额
 * @param {string} params.currency 可选: 币种类型
 * @return Promise<OAdminCouponPut>
 */
export const adminCouponPut = async (params?: IAdminCouponPut) => {
	return put<OAdminCouponPut>(`/admin/coupon`,{
		params
	})
}
/**
 * @description 优惠券发送投资者 buildFnGetOrPostCode
 * 
 * @param {number} params.couponId 必填: 
 * @param {any[]} params.investorNos 必填: 
 * @return Promise<OAdminCouponSendInvestorPost>
 */
export const adminCouponSendInvestorPost = async (params?: IAdminCouponSendInvestorPost) => {
	return post<OAdminCouponSendInvestorPost>(`/admin/coupon/send/investor`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 优惠券核销 buildFnGetOrPostCode
 * 
 * @param {string} params.id 可选: ID
 * @return Promise<OAdminCouponWriteoffPost>
 */
export const adminCouponWriteoffPost = async (params?: IAdminCouponWriteoffPost) => {
	return post<OAdminCouponWriteoffPost>(`/admin/coupon/writeoff`,{
		params
	})
}
/**
 * @description 关联订单 buildFnGetOrPostCode
 * 
 * @param {string} params.investorNo 可选: 投资者编号
 * @return Promise<OAdminDepositInvestorOrderListGet>
 */
export const adminDepositInvestorOrderListGet = async (params?: IAdminDepositInvestorOrderListGet) => {
	return get<OAdminDepositInvestorOrderListGet>(`/admin/deposit/investor/order/list`,{
		params
	})
}
/**
 * @description 查询充值列表 buildFnArrayCode
 * 
 * @param {string} params.beginTime 可选: 发起开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.depositNo 可选: 充值编号
 * @param {string} params.endTime 可选: 发起结束时间 yyyy-MM-dd HH:mm:ss
 * @param {number} params.maxAmount 可选: 充值金额最大值
 * @param {number} params.minAmount 可选: 充值金额最小值
 * @param {string} params.investorEmail 可选: 用户邮箱
 * @param {any[]} params.investorName 可选: 用户名称
 * @param {string} params.investorPhone 可选: 用户手机
 * @param {number} params.pageNum 可选: 当前页数
 * @param {number} params.pageSize 可选: 每页数量
 * @param {number} params.createById 可选: 操作人id
 * @param {string} params.investorNo 可选: 用户编号
 * @param {string} params.orderNo 可选: 订单编号}
 * @return Promise<OAdminDepositListGetItem>
 */
export const adminDepositListGet = async (params?: IAdminDepositListGet) => {
	return get<OAdminDepositListGetItem[]>(`/admin/deposit/list`, {
		params
	})
}
/**
 * @description 充值 手动入金 buildFnGetOrPostCode
 * 
 * @param {number} params.amount 必填: 金额
 * @param {number} params.investorId 必填: 用户id
 * @param {string} params.orderNo 必填: 订单编号
 * @param {string} params.remark 必填: 备注
 * @return Promise<OAdminDepositPost>
 */
export const adminDepositPost = async (params?: IAdminDepositPost) => {
	return post<OAdminDepositPost>(`/admin/deposit`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取部门分配规则 buildFnGetOrPostCode
 * 
 * @param {number} params.deptId 必填: 部门ID
 * @return Promise<OAdminDeptAllocationRuleGet>
 */
export const adminDeptAllocationRuleGet = async (params?: IAdminDeptAllocationRuleGet) => {
	return get<OAdminDeptAllocationRuleGet>(`/admin/dept/allocation/rule`,{
		params
	})
}
/**
 * @description 添加/编辑部门分配规则 buildFnGetOrPostCode
 * 
 * @param {number} params.allocationStatus 必填: 分配状态 0-手动 1-自动
 * @param {number} params.autoAllocation 可选: 自动分配 0-按员工ID 1-安权重
 * @param {number} params.autoSwitch 可选: 自动规则开关 0-关闭 1-打开
 * @param {any[]} params.autoTimeRule 可选: 
 * @param {any[]} params.autoWeekRule 可选: 自动规则时间-周
 * @param {number} params.choiceUserType 可选: 选择员工类型 0-全部 1-自定义
 * @param {string} params.deptId 必填:  部门ID
 * @param {any[]} params.deptUsers 可选: 员工列表
 * @param {number} params.msgNotify 可选: 消息提醒 0-不提醒 1-提醒
 * @return Promise<OAdminDeptAllocationRulePost>
 */
export const adminDeptAllocationRulePost = async (params?: IAdminDeptAllocationRulePost) => {
	return post<OAdminDeptAllocationRulePost>(`/admin/dept/allocation/rule`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除部门 buildFnPathCode
 * @path {number id 必填: 部门ID}
 * @return Promise<OAdminDeptIdDelete>
 */
export const adminDeptIdDelete = async (id: number) => {
	return del<OAdminDeptIdDelete>(`/admin/dept/${id}`)
}
/**
 * @description 查询部门详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminDeptIdGet>
 */
export const adminDeptIdGet = async (id: number) => {
	return get<OAdminDeptIdGet>(`/admin/dept/${id}`)
}
/**
 * @description 查询部门列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @return Promise<OAdminDeptListGet>
 */
export const adminDeptListGet = async (params?: IAdminDeptListGet) => {
	return get<OAdminDeptListGet>(`/admin/dept/list`,{
		params
	})
}
/**
 * @description 新增部门 buildFnGetOrPostCode
 * 
 * @param {any[]} params.leaders 可选: 负责人ids
 * @param {string} params.name 必填: 部门名称
 * @param {any[]} params.users 可选: 员工ids
 * @return Promise<OAdminDeptPost>
 */
export const adminDeptPost = async (params?: IAdminDeptPost) => {
	return post<OAdminDeptPost>(`/admin/dept`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑部门 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 部门ID
 * @param {any[]} params.leaders 可选: 
 * @param {string} params.name 必填: 部门名称
 * @return Promise<OAdminDeptPut>
 */
export const adminDeptPut = async (params?: IAdminDeptPut) => {
	return put<OAdminDeptPut>(`/admin/dept`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 克隆流程 buildFnGetOrPostCode
 * 
 * @param {number} params.flowId 必填: 流程ID
 * @return Promise<OAdminFlowClonePost>
 */
export const adminFlowClonePost = async (params?: IAdminFlowClonePost) => {
	return post<OAdminFlowClonePost>(`/admin/flow/clone`,{
		params
	})
}
/**
 * @description 删除流程 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminFlowIdDelete>
 */
export const adminFlowIdDelete = async (id: number) => {
	return del<OAdminFlowIdDelete>(`/admin/flow/${id}`)
}
/**
 * @description 流程详情 buildFnPathCode
 * @path {string id 必填: }
 * @return Promise<OAdminFlowIdGet>
 */
export const adminFlowIdGet = async (id: string) => {
	return get<OAdminFlowIdGet>(`/admin/flow/${id}`)
}
/**
 * @description 流程列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 搜索条件
 * @param {string} params.createStartTime 可选: 
 * @param {string} params.createEndTime 可选: 
 * @param {string} params.updateStartTime 可选: 
 * @param {string} params.updateEndTime 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.contractId 可选: 合同ID
 * @return Promise<OAdminFlowListGet>
 */
export const adminFlowListGet = async (params?: IAdminFlowListGet) => {
	return get<OAdminFlowListGet>(`/admin/flow/list`,{
		params
	})
}
/**
 * @description 新增模版 buildFnGetOrPostCode
 * 
 * @param {any[]} params.content 必填: 
 * @param {string} params.title 必填: 
 * @param {string} params.type 必填: 
 * @return Promise<OAdminFlowPost>
 */
export const adminFlowPost = async (params?: IAdminFlowPost) => {
	return post<OAdminFlowPost>(`/admin/flow`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑模版 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 
 * @param {string} params.updateType 必填: 修改类型 status, title, content
 * @param {string | number | boolean | any[] | any | null} params.updateValue 必填: 
 * @return Promise<OAdminFlowPut>
 */
export const adminFlowPut = async (params?: IAdminFlowPut) => {
	return put<OAdminFlowPut>(`/admin/flow`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 基金详情 buildFnPathCode
 * @path {string id 必填: }
 * @return Promise<OAdminFundIdGet>
 */
export const adminFundIdGet = async (id: string) => {
	return get<OAdminFundIdGet>(`/admin/fund/${id}`)
}
/**
 * @description 基金列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 基金标题
 * @param {number} params.productId 可选: 产品ID
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminFundListGet>
 */
export const adminFundListGet = async (params?: IAdminFundListGet) => {
	return get<OAdminFundListGet>(`/admin/fund/list`,{
		params
	})
}
/**
 * @description 新增基金 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 标题
 * @param {string} params.type 可选: 基金类型
 * @param {string} params.establishTime 可选: 成立时间
 * @param {string} params.scale 可选: 基金规模
 * @param {string} params.manager 可选: 基金管理人
 * @return Promise<OAdminFundPost>
 */
export const adminFundPost = async (params?: IAdminFundPost) => {
	return post<OAdminFundPost>(`/admin/fund`,{
		params
	})
}
/**
 * @description 编辑基金 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 标题
 * @param {string} params.type 可选: 基金类型
 * @param {string} params.establishTime 可选: 成立时间
 * @param {string} params.scale 可选: 基金规模
 * @param {string} params.manager 可选: 基金管理人
 * @param {string} params.id 可选: 主键ID
 * @return Promise<OAdminFundPut>
 */
export const adminFundPut = async (params?: IAdminFundPut) => {
	return put<OAdminFundPut>(`/admin/fund`,{
		params
	})
}
/**
 * @description 基金类型列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminFundTypeListGet>
 */
export const adminFundTypeListGet = async (params?: IAdminFundTypeListGet) => {
	return get<OAdminFundTypeListGet>(`/admin/fund/type/list`,{
		params
	})
}
/**
 * @description 获取用户信息 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminInfoGet>
 */
export const adminInfoGet = async (params?: IAdminInfoGet) => {
	return get<OAdminInfoGet>(`/admin/info`,{
		params
	})
}
/**
 * @description 获取邀请的用户 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 投资者ID
 * @param {number} params.pageNum 可选: 页码
 * @param {number} params.pageSize 可选: 条数
 * @return Promise<OAdminInvestorInviteeListGet>
 */
export const adminInvestorInviteeListGet = async (params?: IAdminInvestorInviteeListGet) => {
	return get<OAdminInvestorInviteeListGet>(`/admin/investor/invitee/list`,{
		params
	})
}
/**
 * @description 获取投资者列表 buildFnArrayCode
 * 
 * @param {number} params.pageNum 可选: 当前页数
 * @param {number} params.pageSize 可选: 每页数量
 * @param {string} params.createTimeEnd 可选: join date end
 * @param {string} params.createTimeStart 可选: join date start
 * @param {string} params.email 可选: 用户邮箱
 * @param {string} params.investorNo 可选: 
 * @param {string} params.lastLoginDateStart 可选: 
 * @param {string} params.lastLoginDateEnd 可选: 
 * @param {number} params.type 可选: 投资者类型  3-Reg S 4-Reg D
 * @param {string} params.name 可选: 姓名
 * @param {string} params.invEmail 可选: 邀请人
 * @param {number} params.productId 可选: 产品ID}
 * @return Promise<OAdminInvestorListGetItem>
 */
export const adminInvestorListGet = async (params?: IAdminInvestorListGet) => {
	return get<OAdminInvestorListGetItem[]>(`/admin/investor/list`, {
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取投资者订单列表 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 可选: 投资者ID
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminInvestorOrderListGet>
 */
export const adminInvestorOrderListGet = async (params?: IAdminInvestorOrderListGet) => {
	return get<OAdminInvestorOrderListGet>(`/admin/investor/order/list`,{
		params
	})
}
/**
 * @description 获取投资者已有的权限 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 可选: 
 * @param {string} params.type 可选: 固定值 file
 * @param {number} params.productId 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @return Promise<OAdminInvestorProductRelevantListGet>
 */
export const adminInvestorProductRelevantListGet = async (params?: IAdminInvestorProductRelevantListGet) => {
	return get<OAdminInvestorProductRelevantListGet>(`/admin/investor/product/relevant/list`,{
		params
	})
}
/**
 * @description 分配投资者权限 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资人ID
 * @param {number} params.levelId 必填: 等级ID
 * @param {number} params.productId 必填: 产品ID
 * @param {string} params.type 必填: 类型 固定值 file 或者 video
 * @return Promise<OAdminInvestorProductRelevantPost>
 */
export const adminInvestorProductRelevantPost = async (params?: IAdminInvestorProductRelevantPost) => {
	return post<OAdminInvestorProductRelevantPost>(`/admin/investor/product/relevant`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 新增投资者 buildFnGetOrPostCode
 * 
 * @param {string} params.alienNumber 可选: 侨民号码 即绿卡上的号码
 * @param {string} params.avatar 可选: 图像
 * @param {string} params.birthday 可选: 出生日期
 * @param {string} params.city 可选: 城市
 * @param {string} params.country 可选: 国家
 * @param {string} params.currentAddress 可选: 当前地址
 * @param {string} params.demoAccount 可选: 0-非演示账号 1-演示账号
 * @param {string} params.email 必填: 邮箱
 * @param {string} params.firstName 必填: 
 * @param {number} params.gender 可选: 性别 0-male 1-female 2-unknown
 * @param {string} params.lastName 必填: 
 * @param {string} params.middleName 可选: 
 * @param {string} params.overseasAddress 可选: 海外地址
 * @param {string} params.phone 可选: 手机号
 * @param {string} params.phoneAreaCode 可选: 手机区号
 * @param {string} params.province 可选: 洲/省
 * @param {string} params.remark 可选: 备注
 * @param {string} params.ssn 可选: 社会安全号码
 * @param {number} params.type 可选: 投资者类型 0-未选择合格投资者 1-非合格投资者 2-合格投资者 3-Reg S 4-Reg D
 * @param {string} params.zipCode 可选: 邮政编码
 * @return Promise<OAdminInvestorRecordAddPost>
 */
export const adminInvestorRecordAddPost = async (params?: IAdminInvestorRecordAddPost) => {
	return post<OAdminInvestorRecordAddPost>(`/admin/investor/record/add`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取投资者基本信息 buildFnGetOrPostCode
 * 
 * @param {number} params.id 可选: 投资者ID
 * @return Promise<OAdminInvestorRecordBasicGet>
 */
export const adminInvestorRecordBasicGet = async (params?: IAdminInvestorRecordBasicGet) => {
	return get<OAdminInvestorRecordBasicGet>(`/admin/investor/record/basic`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 更新投资者基本信息 buildFnGetOrPostCode
 * 
 * @param {string} params.alienNumber 可选: 侨民号码 即绿卡上的号码
 * @param {string} params.avatar 可选: profile photo
 * @param {number} params.birthday 可选: 出生日期
 * @param {string} params.city 可选: 城市
 * @param {string} params.country 可选: 国家
 * @param {string} params.currentAddress 可选: 当前地址
 * @param {number} params.demoAccount 可选: 0-非演示账号 1-演示账号
 * @param {string} params.firstName 可选: 名 微信返回的nickname保存至此字段
 * @param {number} params.gender 可选: 性别,0:male;1:female,2:unknow
 * @param {number} params.id 可选: UID
 * @param {string} params.lastName 可选: 姓
 * @param {string} params.middleName 可选: 中名
 * @param {number} params.orderNum 可选: 可下单数量
 * @param {string} params.overseasAddress 可选: 海外地址
 * @param {number} params.privacyStatus 可选: 隐私开关 0-关闭 1-开启
 * @param {string} params.province 可选: 洲/省
 * @param {number} params.regType 可选: 投资者类型 0-未选择合格投资者  3-Reg S 4-Reg D
 * @param {string} params.remark 可选: 备注
 * @param {string} params.ssn 可选: 社会安全号码
 * @param {number} params.status 可选: 0-正常 1-停用
 * @param {number} params.twoFaStatus 可选: 两步验证状态 0-关闭 1-开启
 * @param {string} params.zipCode 可选: 邮政编码
 * @return Promise<OAdminInvestorRecordUpdatePut>
 */
export const adminInvestorRecordUpdatePut = async (params?: IAdminInvestorRecordUpdatePut) => {
	return put<OAdminInvestorRecordUpdatePut>(`/admin/investor/record/update`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 重发密码文件 buildFnGetOrPostCode
 * 
 * @param {string} params.id 必填: id
 * @return Promise<OAdminInvestorRepeatPwdEmailPost>
 */
export const adminInvestorRepeatPwdEmailPost = async (params?: IAdminInvestorRepeatPwdEmailPost) => {
	return post<OAdminInvestorRepeatPwdEmailPost>(`/admin/investor/repeatPwdEmail`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 投资者token buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资者ID
 * @return Promise<OAdminInvestorTokenPost>
 */
export const adminInvestorTokenPost = async (params?: IAdminInvestorTokenPost) => {
	return post<OAdminInvestorTokenPost>(`/admin/investor/token`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取投资者银行信息 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 可选: 投资者ID
 * @return Promise<OAdminInvestorWalletBankAccountGet>
 */
export const adminInvestorWalletBankAccountGet = async (params?: IAdminInvestorWalletBankAccountGet) => {
	return get<OAdminInvestorWalletBankAccountGet>(`/admin/investor/wallet/bank/account`,{
		params
	})
}
/**
 * @description 保存投资者银行卡信息 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资者id
 * @param {string} params.bankNumber 必填: 银行卡号
 * @param {string} params.bankName 必填: 开户行
 * @param {string} params.bankUserName 必填: 开户户名
 * @return Promise<OAdminInvestorWalletBankAccountPost>
 */
export const adminInvestorWalletBankAccountPost = async (params?: IAdminInvestorWalletBankAccountPost) => {
	return post<OAdminInvestorWalletBankAccountPost>(`/admin/investor/wallet/bank/account`,{
		params
	})
}
/**
 * @description 获取投资者投资记录 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.depositNo 可选: 流水号
 * @return Promise<OAdminInvestorWalletDepositListGet>
 */
export const adminInvestorWalletDepositListGet = async (params?: IAdminInvestorWalletDepositListGet) => {
	return get<OAdminInvestorWalletDepositListGet>(`/admin/investor/wallet/deposit/list`,{
		params
	})
}
/**
 * @description 获取投资者资产详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminInvestorWalletInfoIdGet>
 */
export const adminInvestorWalletInfoIdGet = async (id: number) => {
	return get<OAdminInvestorWalletInfoIdGet>(`/admin/investor/wallet/info/${id}`)
}
/**
 * @description 获取投资者订单支付记录 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.payNo 可选: 流水号
 * @return Promise<OAdminInvestorWalletOrderpayListGet>
 */
export const adminInvestorWalletOrderpayListGet = async (params?: IAdminInvestorWalletOrderpayListGet) => {
	return get<OAdminInvestorWalletOrderpayListGet>(`/admin/investor/wallet/orderpay/list`,{
		params
	})
}
/**
 * @description 获取投资者反俑记录 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.rebateNo 可选: 流水号
 * @return Promise<OAdminInvestorWalletRebateListGet>
 */
export const adminInvestorWalletRebateListGet = async (params?: IAdminInvestorWalletRebateListGet) => {
	return get<OAdminInvestorWalletRebateListGet>(`/admin/investor/wallet/rebate/list`,{
		params
	})
}
/**
 * @description 规则详情 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminInvitationRuleGet>
 */
export const adminInvitationRuleGet = async (params?: IAdminInvitationRuleGet) => {
	return get<OAdminInvitationRuleGet>(`/admin/invitation/rule`,{
		params
	})
}
/**
 * @description 添加规则 buildFnGetOrPostCode
 * 
 * @param {string} params.content 必填: 规则内容
 * @return Promise<OAdminInvitationRulePost>
 */
export const adminInvitationRulePost = async (params?: IAdminInvitationRulePost) => {
	return post<OAdminInvitationRulePost>(`/admin/invitation/rule`,{
		params
	})
}
/**
 * @description 登录 buildFnGetOrPostCode
 * 
 * @param {string} params.code 可选: 图形验证码
 * @param {string} params.loginName 可选: 登录用户名
 * @param {string} params.password 可选: 密码
 * @param {string} params.uuid 可选: 唯一标识
 * @return Promise<OAdminLoginPost>
 */
export const adminLoginPost = async (params?: IAdminLoginPost) => {
	return post<OAdminLoginPost>(`/admin/login`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 素材查重 buildFnGetOrPostCode
 * 
 * @param {string} params.hash 必填: false 为不存在，如果存在返回已经存在的文件信息
 * @return Promise<OAdminMaterialExistGet>
 */
export const adminMaterialExistGet = async (params?: IAdminMaterialExistGet) => {
	return get<OAdminMaterialExistGet>(`/admin/material/exist`,{
		params
	})
}
/**
 * @description 删除素材 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminMaterialIdDelete>
 */
export const adminMaterialIdDelete = async (id: number) => {
	return del<OAdminMaterialIdDelete>(`/admin/material/${id}`)
}
/**
 * @description 素材列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.name 可选: 
 * @param {any[]} params.type 可选:  0: 'img',  1: 'pdf',  2: 'video',  3: 'html',  4: 'txt',  5: 'ppt',  6: 'xls',  7: 'doc',  8: 'zip',  9: 'file'
 * @param {number} params.tagId 可选: 标签ID
 * @return Promise<OAdminMaterialListGet>
 */
export const adminMaterialListGet = async (params?: IAdminMaterialListGet) => {
	return get<OAdminMaterialListGet>(`/admin/material/list`,{
		params
	})
}
/**
 * @description 修改素材 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 素材ID
 * @param {string} params.name 必填: 素材名称
 * @param {any[]} params.tagIds 可选: 标签ids
 * @return Promise<OAdminMaterialPut>
 */
export const adminMaterialPut = async (params?: IAdminMaterialPut) => {
	return put<OAdminMaterialPut>(`/admin/material`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 恢复素材 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 素材ID
 * @return Promise<OAdminMaterialRecoverPost>
 */
export const adminMaterialRecoverPost = async (params?: IAdminMaterialRecoverPost) => {
	return post<OAdminMaterialRecoverPost>(`/admin/material/recover`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 素材列表-已删除的 buildFnGetOrPostCode
 * 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.name 可选: 
 * @param {number} params.type 可选:  0: 'img',  1: 'pdf',  2: 'video',  3: 'html',  4: 'txt',  5: 'ppt',  6: 'xls',  7: 'doc',  8: 'zip',  9: 'file'
 * @param {number} params.tagId 可选: 标签ID
 * @return Promise<OAdminMaterialRecycleListGet>
 */
export const adminMaterialRecycleListGet = async (params?: IAdminMaterialRecycleListGet) => {
	return get<OAdminMaterialRecycleListGet>(`/admin/material/recycle/list`,{
		params
	})
}
/**
 * @description 删除标签 buildFnPathCode
 * @path {number id 必填:  标签ID}
 * @return Promise<OAdminMaterialTagIdDelete>
 */
export const adminMaterialTagIdDelete = async (id: number) => {
	return del<OAdminMaterialTagIdDelete>(`/admin/material/tag/${id}`)
}
/**
 * @description 查询标签列表-全部 buildFnGetOrPostCode
 * 
 * @param {string} params.name 可选: 
 * @return Promise<OAdminMaterialTagListAllGet>
 */
export const adminMaterialTagListAllGet = async (params?: IAdminMaterialTagListAllGet) => {
	return get<OAdminMaterialTagListAllGet>(`/admin/material/tag/list/all`,{
		params
	})
}
/**
 * @description 查询标签列表 buildFnGetOrPostCode
 * 
 * @param {string} params.name 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminMaterialTagListGet>
 */
export const adminMaterialTagListGet = async (params?: IAdminMaterialTagListGet) => {
	return get<OAdminMaterialTagListGet>(`/admin/material/tag/list`,{
		params
	})
}
/**
 * @description 添加标签 buildFnGetOrPostCode
 * 
 * @param {string} params.name 必填: 
 * @return Promise<OAdminMaterialTagPost>
 */
export const adminMaterialTagPost = async (params?: IAdminMaterialTagPost) => {
	return post<OAdminMaterialTagPost>(`/admin/material/tag`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑标签 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 
 * @param {string} params.name 必填: 
 * @return Promise<OAdminMaterialTagPut>
 */
export const adminMaterialTagPut = async (params?: IAdminMaterialTagPut) => {
	return put<OAdminMaterialTagPut>(`/admin/material/tag`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 上传素材 buildFnFileCode
 * 
 * @param {file} params.files 必填: 
 * @param {string} params.name 必填: 
 * @param {number} params.type 必填:  0: 'img',  1: 'pdf',  2: 'video',  3: 'html',  4: 'txt',  5: 'ppt',  6: 'xls',  7: 'doc',  8: 'zip',  9: 'file'
 * @param {number} params.size 可选: 
 * @param {number} params.width 可选: 
 * @param {number} params.height 可选: 
 * @param {string} params.tagIds 可选: 标签ids
 * @param {string} params.hash 必填: 文件hash
 * @return Promise<OAdminMaterialUploadPost>
 */
export const adminMaterialUploadPost = async (params?: IAdminMaterialUploadPostFormData) => {
	return post<OAdminMaterialUploadPost>(`/admin/material/upload`, {
		params  
	})
}
/**
 * @description 查询菜单列表 buildFnArrayCode
 * 
 * @param {string} params.menuType 可选: C-菜单 F-接口}
 * @return Promise<OAdminMenuListGetItem>
 */
export const adminMenuListGet = async (params?: IAdminMenuListGet) => {
	return get<OAdminMenuListGetItem[]>(`/admin/menu/list`, {
		params
	})
}
/**
 * @description 删除菜单 buildFnPathCode
 * @path {number menuId 必填: }
 * @return Promise<OAdminMenuMenuIdDelete>
 */
export const adminMenuMenuIdDelete = async (menuId: number) => {
	return del<OAdminMenuMenuIdDelete>(`/admin/menu/${menuId}`)
}
/**
 * @description 查询菜单详情 buildFnPathCode
 * @path {number menuId 必填: }
 * @return Promise<OAdminMenuMenuIdGet>
 */
export const adminMenuMenuIdGet = async (menuId: number) => {
	return get<OAdminMenuMenuIdGet>(`/admin/menu/${menuId}`)
}
/**
 * @description 新增菜单 buildFnGetOrPostCode
 * 
 * @param {number} params.frame 可选: 是否外链 0-否 1-是
 * @param {number} params.menuId 可选: 菜单id
 * @param {string} params.menuName 可选: 菜单名称
 * @param {string} params.menuType 可选: 菜单类型 M-目录 C-菜单 F-接口
 * @param {number} params.orderNum 可选: 排序
 * @param {number} params.parentId 可选: 父菜单id 根目录=0
 * @param {string} params.path 可选: 地址
 * @param {string} params.perms 可选: 权限字符串
 * @param {number} params.status 可选: 菜单状态 0-正常 1-停用
 * @param {number} params.visible 可选: 显示状态 0-显示 1-隐藏
 * @return Promise<OAdminMenuPost>
 */
export const adminMenuPost = async (params?: IAdminMenuPost) => {
	return post<OAdminMenuPost>(`/admin/menu`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改菜单 buildFnGetOrPostCode
 * 
 * @param {number} params.frame 可选: 是否外链 0-否 1-是
 * @param {number} params.menuId 可选: 菜单id
 * @param {string} params.menuName 可选: 菜单名称
 * @param {string} params.menuType 可选: 菜单类型 M-目录 C-菜单 F-接口
 * @param {number} params.orderNum 可选: 排序
 * @param {number} params.parentId 可选: 父菜单id 根目录=0
 * @param {string} params.path 可选: 地址
 * @param {string} params.perms 可选: 权限字符串
 * @param {number} params.status 可选: 菜单状态 0-正常 1-停用
 * @param {number} params.visible 可选: 显示状态 0-显示 1-隐藏
 * @return Promise<OAdminMenuPut>
 */
export const adminMenuPut = async (params?: IAdminMenuPut) => {
	return put<OAdminMenuPut>(`/admin/menu`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取菜单信息 buildFnArrayCode
 * 
 * @return Promise<OAdminMenusGetItem>
 */
export const adminMenusGet = async (params?: IAdminMenusGet) => {
	return get<OAdminMenusGetItem[]>(`/admin/menus`, {
		params
	})
}
/**
 * @description 删除通知 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminNotificationIdDelete>
 */
export const adminNotificationIdDelete = async (id: number) => {
	return del<OAdminNotificationIdDelete>(`/admin/notification/${id}`)
}
/**
 * @description 查询通知详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminNotificationIdGet>
 */
export const adminNotificationIdGet = async (id: number) => {
	return get<OAdminNotificationIdGet>(`/admin/notification/${id}`)
}
/**
 * @description 查询通知列表 buildFnGetOrPostCode
 * 
 * @param {string} params.secondCategory 可选: 通知类型 二级类型 SYS:系统更新  ANN:公告
 * @param {string} params.title 可选: 
 * @param {number} params.createById 可选: 
 * @param {string} params.publishTimeStart 可选: 
 * @param {string} params.publishTimeEnd 可选: 
 * @return Promise<OAdminNotificationListGet>
 */
export const adminNotificationListGet = async (params?: IAdminNotificationListGet) => {
	return get<OAdminNotificationListGet>(`/admin/notification/list`,{
		params
	})
}
/**
 * @description 新增通知 buildFnGetOrPostCode
 * 
 * @param {string} params.secondCategory 可选: 二级类型 SYS:系统更新  ANN:公告
 * @param {string} params.title 可选: 
 * @param {string} params.publishTime 可选: 
 * @param {string} params.content 可选: 
 * @return Promise<OAdminNotificationPost>
 */
export const adminNotificationPost = async (params?: IAdminNotificationPost) => {
	return post<OAdminNotificationPost>(`/admin/notification`,{
		params
	})
}
/**
 * @description 修改订单基本信息 buildFnGetOrPostCode
 * 
 * @param {string} params.applyUserName 可选: 申请人姓名
 * @param {number} params.orderId 必填: 订单ID
 * @param {string} params.receiptNumber 可选: 回执单
 * @return Promise<OAdminOrderBasicInfoPut>
 */
export const adminOrderBasicInfoPut = async (params?: IAdminOrderBasicInfoPut) => {
	return put<OAdminOrderBasicInfoPut>(`/admin/order/basic/info`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 绑定中介 buildFnGetOrPostCode
 * 
 * @param {number} params.brokerId 可选: 中介id
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OAdminOrderBrokerBindPost>
 */
export const adminOrderBrokerBindPost = async (params?: IAdminOrderBrokerBindPost) => {
	return post<OAdminOrderBrokerBindPost>(`/admin/order/broker/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询订单中介列表 buildFnArrayCode
 * 
 * @param {number} params.orderId 必填: 订单id
 * @param {number} params.status 必填: 0-当前 1-历史}
 * @return Promise<OAdminOrderBrokerListGetItem>
 */
export const adminOrderBrokerListGet = async (params?: IAdminOrderBrokerListGet) => {
	return get<OAdminOrderBrokerListGetItem[]>(`/admin/order/broker/list`, {
		params
	})
}
/**
 * @description 取消订单 buildFnGetOrPostCode
 * 
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OAdminOrderCancelPost>
 */
export const adminOrderCancelPost = async (params?: IAdminOrderCancelPost) => {
	return post<OAdminOrderCancelPost>(`/admin/order/cancel`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 绑定文案 buildFnGetOrPostCode
 * 
 * @param {number} params.copywritingId 可选: 文案id
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OAdminOrderCopywritingBindPost>
 */
export const adminOrderCopywritingBindPost = async (params?: IAdminOrderCopywritingBindPost) => {
	return post<OAdminOrderCopywritingBindPost>(`/admin/order/copywriting/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询订单文案列表 buildFnArrayCode
 * 
 * @param {number} params.orderId 必填: 订单id
 * @param {number} params.status 必填: 0-当前 1-历史}
 * @return Promise<OAdminOrderCopywritingListGetItem>
 */
export const adminOrderCopywritingListGet = async (params?: IAdminOrderCopywritingListGet) => {
	return get<OAdminOrderCopywritingListGetItem[]>(`/admin/order/copywriting/list`, {
		params
	})
}
/**
 * @description 创建订单 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资人ID
 * @param {string} params.productType 必填: 产品类型  'EB-5','EB-1A','NIW'
 * @return Promise<OAdminOrderCreatePost>
 */
export const adminOrderCreatePost = async (params?: IAdminOrderCreatePost) => {
	return post<OAdminOrderCreatePost>(`/admin/order/create`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 绑定客服 buildFnGetOrPostCode
 * 
 * @param {number} params.customerId 可选: 客服id
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OAdminOrderCustomerBindPost>
 */
export const adminOrderCustomerBindPost = async (params?: IAdminOrderCustomerBindPost) => {
	return post<OAdminOrderCustomerBindPost>(`/admin/order/customer/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询订单客服列表 buildFnArrayCode
 * 
 * @param {number} params.orderId 必填: 订单id
 * @param {number} params.status 必填: 0-当前 1-历史}
 * @return Promise<OAdminOrderCustomerListGetItem>
 */
export const adminOrderCustomerListGet = async (params?: IAdminOrderCustomerListGet) => {
	return get<OAdminOrderCustomerListGetItem[]>(`/admin/order/customer/list`, {
		params
	})
}
/**
 * @description 绑定律师 buildFnGetOrPostCode
 * 
 * @param {number} params.lawyerId 可选: 律师id
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OAdminOrderLawyerBindPost>
 */
export const adminOrderLawyerBindPost = async (params?: IAdminOrderLawyerBindPost) => {
	return post<OAdminOrderLawyerBindPost>(`/admin/order/lawyer/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询订单律师列表 buildFnArrayCode
 * 
 * @param {number} params.orderId 必填: 订单id
 * @param {number} params.status 必填: 0-当前 1-历史}
 * @return Promise<OAdminOrderLawyerListGetItem>
 */
export const adminOrderLawyerListGet = async (params?: IAdminOrderLawyerListGet) => {
	return get<OAdminOrderLawyerListGetItem[]>(`/admin/order/lawyer/list`, {
		params
	})
}
/**
 * @description 查询订单列表 buildFnArrayCode
 * 
 * @param {string} params.beginTime 可选: 签约开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.endTime 可选: 签约结束时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.orderNo 可选: 订单编号
 * @param {number} params.orderStatus 可选: 订单状态 0-进行重 1-已完成 100-已取消
 * @param {number} params.pageNum 可选: 当前页数
 * @param {number} params.pageSize 可选: 每页数量
 * @param {number} params.productId 可选: 产品id
 * @param {string} params.type 可选: 产品类型详见productType枚举 目前有:EB-5
 * @param {string} params.investorEmail 可选: 投资者邮箱
 * @param {string} params.investorName 可选: 投资者名称
 * @param {string} params.investorNo 可选: 投资者编号}
 * @return Promise<OAdminOrderListGetItem>
 */
export const adminOrderListGet = async (params?: IAdminOrderListGet) => {
	return get<OAdminOrderListGetItem[]>(`/admin/order/list`, {
		params
	})
}
/**
 * @description 获取订单详情 buildFnPathCode
 * @path {string orderNo 必填: }
 * @return Promise<OAdminOrderOrderNoGet>
 */
export const adminOrderOrderNoGet = async (orderNo: string) => {
	return get<OAdminOrderOrderNoGet>(`/admin/order/${orderNo}`)
}
/**
 * @description 订单支付记录 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 页码
 * @param {number} params.pageSize 可选: 条数
 * @param {string} params.payNo 可选: 流水号
 * @param {string} params.investorNo 可选: 投资者编号
 * @param {string} params.investorEmail 可选: 投资者邮箱
 * @param {string} params.investorPhone 可选: 投资者手机
 * @param {string} params.investorName 可选: 投资者名称
 * @param {string} params.beginTime 可选: 充值时间
 * @param {string} params.endTime 可选: 充值时间
 * @param {number} params.minAmount 可选: 充值金额
 * @param {number} params.maxAmount 可选: 充值金额
 * @param {string} params.orderNo 可选: 订单编号
 * @param {number} params.createById 可选: 操作人
 * @return Promise<OAdminOrderPayListGet>
 */
export const adminOrderPayListGet = async (params?: IAdminOrderPayListGet) => {
	return get<OAdminOrderPayListGet>(`/admin/order/pay/list`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 隐藏/显示阶段 buildFnGetOrPostCode
 * 
 * @param {number} params.phaseId 必填: 阶段ID
 * @param {number} params.status 必填: 状态 0打开 1关闭
 * @return Promise<OAdminOrderPhaseStatusPost>
 */
export const adminOrderPhaseStatusPost = async (params?: IAdminOrderPhaseStatusPost) => {
	return post<OAdminOrderPhaseStatusPost>(`/admin/order/phase/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 绑定产品 buildFnGetOrPostCode
 * 
 * @param {string} params.orderId 必填: 订单ID
 * @param {string} params.productId 必填: 产品ID
 * @return Promise<OAdminOrderProductBindPost>
 */
export const adminOrderProductBindPost = async (params?: IAdminOrderProductBindPost) => {
	return post<OAdminOrderProductBindPost>(`/admin/order/product/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改订单 buildFnGetOrPostCode
 * 
 * @param {number} params.componentId 必填: 组件ID
 * @param {number} params.orderId 必填: 订单ID
 * @param {number} params.orderSubId 必填: 子订单ID
 * @param {any} params.valueObject 必填: 
 * @return Promise<OAdminOrderStepPut>
 */
export const adminOrderStepPut = async (params?: IAdminOrderStepPut) => {
	return put<OAdminOrderStepPut>(`/admin/order/step`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除订单组件内容(子订单) buildFnPathCode
 * @path {number componentId 必填: 组件ID}
 * @path {number orderSubId 必填: 子订单ID}
 * @return Promise<OAdminOrderSubContentComponentIdOrderSubIdDelete>
 */
export const adminOrderSubContentComponentIdOrderSubIdDelete = async (componentId: number, orderSubId: number) => {
	return del<OAdminOrderSubContentComponentIdOrderSubIdDelete>(`/admin/order/sub/content/${componentId}/${orderSubId}`)
}
/**
 * @description 添加订单组件内容(子订单) buildFnGetOrPostCode
 * 
 * @param {number} params.componentId 必填: 组件ID
 * @param {number} params.orderId 必填: 订单ID
 * @param {any} params.valueObject 必填: 各组件内容值
 * @return Promise<OAdminOrderSubContentPost>
 */
export const adminOrderSubContentPost = async (params?: IAdminOrderSubContentPost) => {
	return post<OAdminOrderSubContentPost>(`/admin/order/sub/content`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改订单组件内容(子订单) buildFnGetOrPostCode
 * 
 * @param {number} params.componentId 必填: 组件ID
 * @param {number} params.orderId 必填: 订单ID
 * @param {number} params.orderSubId 必填: 
 * @param {any} params.valueObject 必填: 各组件内容值
 * @return Promise<OAdminOrderSubContentPut>
 */
export const adminOrderSubContentPut = async (params?: IAdminOrderSubContentPut) => {
	return put<OAdminOrderSubContentPut>(`/admin/order/sub/content`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改阶段/组件标题 buildFnGetOrPostCode
 * 
 * @param {number} params.bizStatus 可选: 业务状态 0未开始 1已完成 2进行中
 * @param {number} params.id 必填: 对应 phaseId，phaseChildId，componentId
 * @param {number} params.status 可选: 状态 0打开 1关闭
 * @param {string} params.title 必填: 标题内容
 * @param {string} params.type 必填: 对于的类型 'phase','step','component'
 * @return Promise<OAdminOrderSubTitlePut>
 */
export const adminOrderSubTitlePut = async (params?: IAdminOrderSubTitlePut) => {
	return put<OAdminOrderSubTitlePut>(`/admin/order/sub/title`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 审核订单组件内容(子订单) buildFnGetOrPostCode
 * 
 * @param {number} params.componentId 必填: 组件ID
 * @param {number} params.orderId 必填: 订单ID
 * @param {number} params.orderSubId 必填: 子订单ID
 * @param {string} params.reason 可选: 审核不通过原因
 * @param {number} params.status 必填: 审核状态 1-通过 9-不通过
 * @return Promise<OAdminOrderSubVerifyPost>
 */
export const adminOrderSubVerifyPost = async (params?: IAdminOrderSubVerifyPost) => {
	return post<OAdminOrderSubVerifyPost>(`/admin/order/sub/verify`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 钱包内交易（目前只允许操作投资者的项目钱包） buildFnGetOrPostCode
 * 
 * @param {number} params.amount 可选: 交易金额
 * @param {string} params.sourceAmountType 可选: 来源资金类型
 * @param {string} params.targetAmountType 可选: 目标资金类型
 * @param {number} params.walletId 可选: 钱包id
 * @return Promise<OAdminOrderTransferInsidePost>
 */
export const adminOrderTransferInsidePost = async (params?: IAdminOrderTransferInsidePost) => {
	return post<OAdminOrderTransferInsidePost>(`/admin/order/transfer/inside`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取钱包内交易资金类型列表 buildFnArrayCode
 * 
 * @return Promise<OAdminOrderTransferInsideTypeListGetItem>
 */
export const adminOrderTransferInsideTypeListGet = async (params?: IAdminOrderTransferInsideTypeListGet) => {
	return get<OAdminOrderTransferInsideTypeListGetItem[]>(`/admin/order/transfer/inside/type/list`, {
		params
	})
}
/**
 * @description 获取订单投资记录 buildFnGetOrPostCode
 * 
 * @param {string} params.orderNo 可选: 订单号
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.depositNo 可选: 流水号
 * @return Promise<OAdminOrderWalletDepositListGet>
 */
export const adminOrderWalletDepositListGet = async (params?: IAdminOrderWalletDepositListGet) => {
	return get<OAdminOrderWalletDepositListGet>(`/admin/order/wallet/deposit/list`,{
		params
	})
}
/**
 * @description 获取项目钱包详情 buildFnGetOrPostCode
 * 
 * @param {string} params.orderNo 必填: 订单编号
 * @return Promise<OAdminOrderWalletGet>
 */
export const adminOrderWalletGet = async (params?: IAdminOrderWalletGet) => {
	return get<OAdminOrderWalletGet>(`/admin/order/wallet`,{
		params
	})
}
/**
 * @description 获取投资者订单支付记录 buildFnGetOrPostCode
 * 
 * @param {string} params.orderNo 可选: 订单号
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.payNo 可选: 流水号
 * @return Promise<OAdminOrderWalletOrderpayListGet>
 */
export const adminOrderWalletOrderpayListGet = async (params?: IAdminOrderWalletOrderpayListGet) => {
	return get<OAdminOrderWalletOrderpayListGet>(`/admin/order/wallet/orderpay/list`,{
		params
	})
}
/**
 * @description 来源详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminOriginIdGet>
 */
export const adminOriginIdGet = async (id: number) => {
	return get<OAdminOriginIdGet>(`/admin/origin/${id}`)
}
/**
 * @description 来源列表 buildFnGetOrPostCode
 * 
 * @param {string} params.name 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminOriginListGet>
 */
export const adminOriginListGet = async (params?: IAdminOriginListGet) => {
	return get<OAdminOriginListGet>(`/admin/origin/list`,{
		params
	})
}
/**
 * @description 添加来源 buildFnGetOrPostCode
 * 
 * @param {string} params.name 必填: 名称
 * @param {string} params.seaCategory 必填: 公海类型 ['baidu', 'meiqia', 'btm',wechat']
 * @param {number} params.seaId 必填: 公海ID
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @return Promise<OAdminOriginPost>
 */
export const adminOriginPost = async (params?: IAdminOriginPost) => {
	return post<OAdminOriginPost>(`/admin/origin`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑来源 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: ID
 * @param {string} params.name 必填: 名称
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @return Promise<OAdminOriginPut>
 */
export const adminOriginPut = async (params?: IAdminOriginPut) => {
	return put<OAdminOriginPut>(`/admin/origin`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 产品绑定/换绑流程 buildFnGetOrPostCode
 * 
 * @param {number} params.productId 可选: 产品ID
 * @param {number} params.flowId 可选: 流程ID
 * @return Promise<OAdminProductBindFlowPost>
 */
export const adminProductBindFlowPost = async (params?: IAdminProductBindFlowPost) => {
	return post<OAdminProductBindFlowPost>(`/admin/product/bind/flow`,{
		params
	})
}
/**
 * @description 编辑产品详情内容 buildFnGetOrPostCode
 * 
 * @param {string} params.content 必填: 产品详情内容
 * @param {number} params.id 必填: 产品ID
 * @return Promise<OAdminProductContentPut>
 */
export const adminProductContentPut = async (params?: IAdminProductContentPut) => {
	return put<OAdminProductContentPut>(`/admin/product/content`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取产品下所有流程 buildFnGetOrPostCode
 * 
 * @param {number} params.productId 可选: 产品ID
 * @return Promise<OAdminProductFlowAlllistGet>
 */
export const adminProductFlowAlllistGet = async (params?: IAdminProductFlowAlllistGet) => {
	return get<OAdminProductFlowAlllistGet>(`/admin/product/flow/alllist`,{
		params
	})
}
/**
 * @description 获取产品下的流程 buildFnGetOrPostCode
 * 
 * @param {number} params.productId 可选: 产品ID
 * @return Promise<OAdminProductFlowListGet>
 */
export const adminProductFlowListGet = async (params?: IAdminProductFlowListGet) => {
	return get<OAdminProductFlowListGet>(`/admin/product/flow/list`,{
		params
	})
}
/**
 * @description 删除产品 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminProductIdDelete>
 */
export const adminProductIdDelete = async (id: number) => {
	return del<OAdminProductIdDelete>(`/admin/product/${id}`)
}
/**
 * @description 获取产品详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminProductIdGet>
 */
export const adminProductIdGet = async (id: number) => {
	return get<OAdminProductIdGet>(`/admin/product/${id}`)
}
/**
 * @description 查询产品列表 buildFnArrayCode
 * 
 * @param {string} params.type 可选: 产品类型
 * @param {string} params.productName 可选: 产品名称
 * @param {number} params.flowId 可选: 绑定流程
 * @param {string} params.createBy 可选: 创建人
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.productId 可选: 产品ID
 * @param {number} params.fundId 可选: 基金ID}
 * @return Promise<OAdminProductListGetItem>
 */
export const adminProductListGet = async (params?: IAdminProductListGet) => {
	return get<OAdminProductListGetItem[]>(`/admin/product/list`, {
		params
	})
}
/**
 * @description 新增产品 buildFnGetOrPostCode
 * 
 * @param {string} params.actualCompletionTime 可选: 实际竣工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.actualWorkTime 可选: 实际开工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.address 可选: 项目位置
 * @param {number} params.borrowerExtensionNum 可选: 借款方延期数量
 * @param {number} params.borrowerExtensionRights 可选: 借款方延期权 0-否 1-是
 * @param {string} params.coverImg 必填: 图片链接
 * @param {number} params.createJobNum 可选: 创造就业总数
 * @param {string} params.designer 可选: 项目设计者
 * @param {string} params.estimatedCompletionTime 可选: 预计竣工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.estimatedWorkTime 可选: 预计开工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.fundCompany 可选: 发行方公司
 * @param {number} params.fundId 可选: 基金ID
 * @param {number} params.fundStatus 可选: 发行状态(原资金状态) 1-准备发行 2-募集中 3-募集完毕 4-已经还款和二投 5-投资中 6-二投中 7-准备还款
 * @param {number} params.id 可选: id
 * @param {number} params.immigrantNum 可选: 移民名额总数
 * @param {number} params.immigrantStatus 必填: 移民状态 0-暂无状态 1-I-526审批中 2-I-526已批准 3-I-829审批中
 * @param {string} params.introduction 可选: 项目介绍
 * @param {number} params.investYears 可选: 投资年限
 * @param {number} params.law 必填: 法律 1新法 0老法
 * @param {string} params.mobileLinkUrl 可选: 移动端详情页链接
 * @param {string} params.pcLinkUrl 可选: pc详情页链接
 * @param {number} params.perInvestAmount 可选: 每份投资额 单位美金
 * @param {string} params.productName 必填: 产品名称
 * @param {number} params.progressStatus 可选: 建设进度状态 1-项目规划中 2-开工准备中 3-地基施工中 4-主体施工中 5-内部施工中 6-已经完工 7-项目出租中 8-项目销售中 9-出租销售完成
 * @param {number} params.projectStatus 可选: 项目状态 1-即将开始 2-申购中 3-已过户 4-暂停 5-终止
 * @param {number} params.raiseAmount 必填: 募集总额
 * @param {string} params.regionCategory 可选: 地区类别 1-农业地区 2-高失业地区 3-基建项目 4-一般地区
 * @param {string} params.sellBeginTime 可选: 发售开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.sellEndTime 可选: 发售结束时间 yyyy-MM-dd HH:mm:ss
 * @param {number} params.sellNum 可选: 最大发售额
 * @param {number} params.sellStatus 必填: 售罄状态 0-未售完 1已售完
 * @param {number} params.showStatus 可选: 显示状态 0-正常 1-隐藏
 * @param {number} params.sort 必填: 排序 升序
 * @param {string} params.type 可选: 产品类型详见productType枚举 目前有:EB-5 ，GENERAL
 * @return Promise<OAdminProductPost>
 */
export const adminProductPost = async (params?: IAdminProductPost) => {
	return post<OAdminProductPost>(`/admin/product`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改产品 buildFnGetOrPostCode
 * 
 * @param {string} params.actualCompletionTime 可选: 实际竣工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.actualWorkTime 可选: 实际开工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.address 可选: 项目位置
 * @param {number} params.borrowerExtensionNum 可选: 借款方延期数量
 * @param {number} params.borrowerExtensionRights 可选: 借款方延期权 0-否 1-是
 * @param {string} params.coverImg 必填: 图片链接
 * @param {number} params.createJobNum 可选: 创造就业总数
 * @param {string} params.designer 可选: 项目设计者
 * @param {string} params.estimatedCompletionTime 可选: 预计竣工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.estimatedWorkTime 可选: 预计开工时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.fundCompany 可选: 发行方公司
 * @param {number} params.fundId 可选: 基金ID
 * @param {number} params.fundStatus 可选: 发行状态(原资金状态) 1-准备发行 2-募集中 3-募集完毕 4-已经还款和二投 5-投资中 6-二投中 7-准备还款
 * @param {number} params.id 可选: id
 * @param {number} params.immigrantNum 可选: 移民名额总数
 * @param {number} params.immigrantStatus 必填: 移民状态 0-暂无状态 1-I-526审批中 2-I-526已批准 3-I-829审批中
 * @param {string} params.introduction 可选: 项目介绍
 * @param {number} params.investYears 可选: 投资年限
 * @param {number} params.law 必填: 法律 1新法 0老法
 * @param {string} params.mobileLinkUrl 可选: 移动端详情页链接
 * @param {string} params.pcLinkUrl 可选: pc详情页链接
 * @param {number} params.perInvestAmount 可选: 每份投资额 单位美金
 * @param {string} params.productName 必填: 产品名称
 * @param {number} params.progressStatus 可选: 建设进度状态 1-项目规划中 2-开工准备中 3-地基施工中 4-主体施工中 5-内部施工中 6-已经完工 7-项目出租中 8-项目销售中 9-出租销售完成
 * @param {number} params.projectStatus 可选: 项目状态 1-即将开始 2-申购中 3-已过户 4-暂停 5-终止
 * @param {number} params.raiseAmount 必填: 募集总额
 * @param {string} params.regionCategory 可选: 地区类别 1-农业地区 2-高失业地区 3-基建项目 4-一般地区
 * @param {string} params.sellBeginTime 可选: 发售开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.sellEndTime 可选: 发售结束时间 yyyy-MM-dd HH:mm:ss
 * @param {number} params.sellNum 可选: 最大发售额
 * @param {number} params.sellStatus 必填: 售罄状态 0-未售完 1已售完
 * @param {number} params.showStatus 可选: 显示状态 0-正常 1-隐藏
 * @param {number} params.sort 必填: 排序 升序
 * @param {string} params.type 可选: 产品类型详见productType枚举 目前有:EB-5 ，GENERAL
 * @return Promise<OAdminProductPut>
 */
export const adminProductPut = async (params?: IAdminProductPut) => {
	return put<OAdminProductPut>(`/admin/product`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询删除后的产品列表  buildFnGetOrPostCode
 * 
 * @param {string} params.type 可选: 产品类型
 * @param {string} params.productName 可选: 产品名称
 * @param {number} params.flowId 可选: 绑定流程
 * @param {string} params.createBy 可选: 创建人
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.productId 可选: 产品ID
 * @param {number} params.fundId 可选: 基金ID
 * @param {string} params.delBy 可选: 删除人
 * @return Promise<OAdminProductRecycleListGet>
 */
export const adminProductRecycleListGet = async (params?: IAdminProductRecycleListGet) => {
	return get<OAdminProductRecycleListGet>(`/admin/product/recycle/list`,{
		params
	})
}
/**
 * @description 申请权限列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.createBy 可选: 申请人
 * @param {number} params.productId 可选: 产品ID
 * @return Promise<OAdminProductRelevantAuditListGet>
 */
export const adminProductRelevantAuditListGet = async (params?: IAdminProductRelevantAuditListGet) => {
	return get<OAdminProductRelevantAuditListGet>(`/admin/product/relevant/audit/list`,{
		params
	})
}
/**
 * @description 申请权限审核 buildFnGetOrPostCode
 * 
 * @param {string} params.auditReason 可选: 原因
 * @param {number} params.id 必填: ID
 * @param {number} params.status 必填: 状态 0-未处理 1-已处理 2-已拒绝
 * @return Promise<OAdminProductRelevantAuditPost>
 */
export const adminProductRelevantAuditPost = async (params?: IAdminProductRelevantAuditPost) => {
	return post<OAdminProductRelevantAuditPost>(`/admin/product/relevant/audit`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询产品相关内容-文件 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantFileGet>
 */
export const adminProductRelevantFileGet = async (params?: IAdminProductRelevantFileGet) => {
	return get<OAdminProductRelevantFileGet>(`/admin/product/relevant/file`,{
		params
	})
}
/**
 * @description 添加产品相关内容-文件 buildFnGetOrPostCode
 * 
 * @param {any[]} params.data 必填: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantFilePost>
 */
export const adminProductRelevantFilePost = async (params?: IAdminProductRelevantFilePost) => {
	return post<OAdminProductRelevantFilePost>(`/admin/product/relevant/file`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除产品文件夹（分组） buildFnPathCode
 * @path {number groupId 必填: }
 * @query {string} delChildren 可选: 当文件夹下面有文件时，1表示强制删除
 * @return Promise<OAdminProductRelevantGroupGroupIdDelete>
 */
export const adminProductRelevantGroupGroupIdDelete = async ({path, params}: IAdminProductRelevantGroupGroupIdDeleteGroup) => {
	return del<OAdminProductRelevantGroupGroupIdDelete>(`/admin/product/relevant/group/${path.groupId}`,{
		params
	})
}
/**
 * @description 查询产品文件夹（分组） buildFnGetOrPostCode
 * 
 * @param {number} params.productId 可选: 产品ID
 * @param {string} params.type 可选: 类型 file，image，video，news
 * @return Promise<OAdminProductRelevantGroupListGet>
 */
export const adminProductRelevantGroupListGet = async (params?: IAdminProductRelevantGroupListGet) => {
	return get<OAdminProductRelevantGroupListGet>(`/admin/product/relevant/group/list`,{
		params
	})
}
/**
 * @description 添加产品文件夹（分组） buildFnGetOrPostCode
 * 
 * @param {number} params.productId 必填: 产品ID
 * @param {string} params.title 必填: 文件夹名
 * @param {string} params.type 必填: file | image
 * @return Promise<OAdminProductRelevantGroupPost>
 */
export const adminProductRelevantGroupPost = async (params?: IAdminProductRelevantGroupPost) => {
	return post<OAdminProductRelevantGroupPost>(`/admin/product/relevant/group`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改产品文件夹（分组） buildFnGetOrPostCode
 * 
 * @param {number} params.groupId 必填: 分组ID
 * @param {string} params.title 必填: 文件夹名
 * @return Promise<OAdminProductRelevantGroupPut>
 */
export const adminProductRelevantGroupPut = async (params?: IAdminProductRelevantGroupPut) => {
	return put<OAdminProductRelevantGroupPut>(`/admin/product/relevant/group`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 批量排序-分组 buildFnGetOrPostCode
 * 
 * @param {any[]} params.data 必填: 
 * @return Promise<OAdminProductRelevantGroupSortPost>
 */
export const adminProductRelevantGroupSortPost = async (params?: IAdminProductRelevantGroupSortPost) => {
	return post<OAdminProductRelevantGroupSortPost>(`/admin/product/relevant/group/sort`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除产品相关内容 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminProductRelevantIdDelete>
 */
export const adminProductRelevantIdDelete = async (id: number) => {
	return del<OAdminProductRelevantIdDelete>(`/admin/product/relevant/${id}`)
}
/**
 * @description 查询产品相关内容-图片 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantImageGet>
 */
export const adminProductRelevantImageGet = async (params?: IAdminProductRelevantImageGet) => {
	return get<OAdminProductRelevantImageGet>(`/admin/product/relevant/image`,{
		params
	})
}
/**
 * @description 添加产品相关内容-图片 buildFnGetOrPostCode
 * 
 * @param {any[]} params.data 必填: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantImagePost>
 */
export const adminProductRelevantImagePost = async (params?: IAdminProductRelevantImagePost) => {
	return post<OAdminProductRelevantImagePost>(`/admin/product/relevant/image`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询产品相关内容等级 buildFnGetOrPostCode
 * 
 * @param {string} params.productType 必填: 产品类型
 * @return Promise<OAdminProductRelevantLevelListGet>
 */
export const adminProductRelevantLevelListGet = async (params?: IAdminProductRelevantLevelListGet) => {
	return get<OAdminProductRelevantLevelListGet>(`/admin/product/relevant/level/list`,{
		params
	})
}
/**
 * @description 添加产品相关内容等级 buildFnGetOrPostCode
 * 
 * @param {number} params.level 必填: 等级值 需>=0
 * @param {string} params.productType 必填: 产品类型
 * @param {number} params.status 必填: 状态 0正常 1禁用
 * @param {string} params.title 必填: 标题
 * @return Promise<OAdminProductRelevantLevelPost>
 */
export const adminProductRelevantLevelPost = async (params?: IAdminProductRelevantLevelPost) => {
	return post<OAdminProductRelevantLevelPost>(`/admin/product/relevant/level`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改产品相关内容等级 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 等级ID
 * @param {number} params.level 必填: 等级值 需>=0
 * @param {number} params.status 必填: 状态 0正常 1禁用
 * @param {string} params.title 必填: 标题
 * @return Promise<OAdminProductRelevantLevelPut>
 */
export const adminProductRelevantLevelPut = async (params?: IAdminProductRelevantLevelPut) => {
	return put<OAdminProductRelevantLevelPut>(`/admin/product/relevant/level`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询产品相关内容-新闻 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantNewsGet>
 */
export const adminProductRelevantNewsGet = async (params?: IAdminProductRelevantNewsGet) => {
	return get<OAdminProductRelevantNewsGet>(`/admin/product/relevant/news`,{
		params
	})
}
/**
 * @description 添加产品相关内容-新闻 buildFnGetOrPostCode
 * 
 * @param {any[]} params.data 必填: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantNewsPost>
 */
export const adminProductRelevantNewsPost = async (params?: IAdminProductRelevantNewsPost) => {
	return post<OAdminProductRelevantNewsPost>(`/admin/product/relevant/news`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改产品相关内容 buildFnGetOrPostCode
 * 
 * @param {string} params.coverImg 可选: 视频封面图
 * @param {number} params.id 必填: 
 * @param {number} params.isFrame 必填: 是否外链 0-否 1-是
 * @param {number} params.levelId 可选: 
 * @param {number} params.sort 必填: 权重 降序
 * @param {string} params.title 必填: 
 * @param {string} params.url 必填: 
 * @return Promise<OAdminProductRelevantPut>
 */
export const adminProductRelevantPut = async (params?: IAdminProductRelevantPut) => {
	return put<OAdminProductRelevantPut>(`/admin/product/relevant`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 排序相关产品内容 buildFnGetOrPostCode
 * 
 * @param {any[]} params.data 必填: 
 * @return Promise<OAdminProductRelevantSortPost>
 */
export const adminProductRelevantSortPost = async (params?: IAdminProductRelevantSortPost) => {
	return post<OAdminProductRelevantSortPost>(`/admin/product/relevant/sort`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询产品相关内容-视频 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantVideoGet>
 */
export const adminProductRelevantVideoGet = async (params?: IAdminProductRelevantVideoGet) => {
	return get<OAdminProductRelevantVideoGet>(`/admin/product/relevant/video`,{
		params
	})
}
/**
 * @description 添加产品相关内容-视频 buildFnGetOrPostCode
 * 
 * @param {any[]} params.data 必填: 
 * @param {number} params.productId 必填: 产品ID
 * @return Promise<OAdminProductRelevantVideoPost>
 */
export const adminProductRelevantVideoPost = async (params?: IAdminProductRelevantVideoPost) => {
	return post<OAdminProductRelevantVideoPost>(`/admin/product/relevant/video`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 撤销 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 产品ID
 * @return Promise<OAdminProductRevokePost>
 */
export const adminProductRevokePost = async (params?: IAdminProductRevokePost) => {
	return post<OAdminProductRevokePost>(`/admin/product/revoke`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改产品显示状态 buildFnGetOrPostCode
 * 
 * @param {number} params.id 可选: id
 * @param {number} params.showStatus 可选: 显示状态 0-正常 1-隐藏
 * @return Promise<OAdminProductShowStatusPost>
 */
export const adminProductShowStatusPost = async (params?: IAdminProductShowStatusPost) => {
	return post<OAdminProductShowStatusPost>(`/admin/product/showStatus`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改产品排序 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 产品ID
 * @param {number} params.sort 必填: 排序值
 * @return Promise<OAdminProductSortPut>
 */
export const adminProductSortPut = async (params?: IAdminProductSortPut) => {
	return put<OAdminProductSortPut>(`/admin/product/sort`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 根据卡号获取银行信息 buildFnGetOrPostCode
 * 
 * @param {string} params.bankNumber 必填: 银行卡号
 * @return Promise<OAdminPublishBankcardinfoGet>
 */
export const adminPublishBankcardinfoGet = async (params?: IAdminPublishBankcardinfoGet) => {
	return get<OAdminPublishBankcardinfoGet>(`/admin/publish/bankcardinfo`,{
		params
	})
}
/**
 * @description 查询中介列表 buildFnArrayCode
 * 
 * @return Promise<OAdminPublishBrokerListGetItem>
 */
export const adminPublishBrokerListGet = async (params?: IAdminPublishBrokerListGet) => {
	return get<OAdminPublishBrokerListGetItem[]>(`/admin/publish/broker/list`, {
		params
	})
}
/**
 * @description 合同组件分类 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminPublishContractComponentGet>
 */
export const adminPublishContractComponentGet = async (params?: IAdminPublishContractComponentGet) => {
	return get<OAdminPublishContractComponentGet>(`/admin/publish/contract/component`,{
		params
	})
}
/**
 * @description 合同列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 合同标题
 * @return Promise<OAdminPublishContractListGet>
 */
export const adminPublishContractListGet = async (params?: IAdminPublishContractListGet) => {
	return get<OAdminPublishContractListGet>(`/admin/publish/contract/list`,{
		params
	})
}
/**
 * @description 查询文案列表 buildFnArrayCode
 * 
 * @return Promise<OAdminPublishCopywritingListGetItem>
 */
export const adminPublishCopywritingListGet = async (params?: IAdminPublishCopywritingListGet) => {
	return get<OAdminPublishCopywritingListGetItem[]>(`/admin/publish/copywriting/list`, {
		params
	})
}
/**
 * @description 查询客服列表 buildFnArrayCode
 * 
 * @return Promise<OAdminPublishCustomerListGetItem>
 */
export const adminPublishCustomerListGet = async (params?: IAdminPublishCustomerListGet) => {
	return get<OAdminPublishCustomerListGetItem[]>(`/admin/publish/customer/list`, {
		params
	})
}
/**
 * @description 查询部门列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {string} params.otherDept 可选: 是否查询其他部门  固定值：1
 * @param {number} params.investorId 可选: 传了的话 则会existMyDeptThread  1-表示该团队下存在线索
 * @return Promise<OAdminPublishDeptListGet>
 */
export const adminPublishDeptListGet = async (params?: IAdminPublishDeptListGet) => {
	return get<OAdminPublishDeptListGet>(`/admin/publish/dept/list`,{
		params
	})
}
/**
 * @description 查询部门列表 -我拥有的部门 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @return Promise<OAdminPublishDeptOwnerlistGet>
 */
export const adminPublishDeptOwnerlistGet = async (params?: IAdminPublishDeptOwnerlistGet) => {
	return get<OAdminPublishDeptOwnerlistGet>(`/admin/publish/dept/ownerlist`,{
		params
	})
}
/**
 * @description 获取私有文件签名地址 buildFnGetOrPostCode
 * 
 * @param {string} params.url 必填: 图片地址
 * @return Promise<OAdminPublishFileSignatureUrlGet>
 */
export const adminPublishFileSignatureUrlGet = async (params?: IAdminPublishFileSignatureUrlGet) => {
	return get<OAdminPublishFileSignatureUrlGet>(`/admin/publish/file/signatureUrl`,{
		params
	})
}
/**
 * @description 流程列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.title 可选: 
 * @return Promise<OAdminPublishFlowListGet>
 */
export const adminPublishFlowListGet = async (params?: IAdminPublishFlowListGet) => {
	return get<OAdminPublishFlowListGet>(`/admin/publish/flow/list`,{
		params
	})
}
/**
 * @description 基金列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminPublishFundListGet>
 */
export const adminPublishFundListGet = async (params?: IAdminPublishFundListGet) => {
	return get<OAdminPublishFundListGet>(`/admin/publish/fund/list`,{
		params
	})
}
/**
 * @description 查询投资者列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminPublishInvestorListGet>
 */
export const adminPublishInvestorListGet = async (params?: IAdminPublishInvestorListGet) => {
	return get<OAdminPublishInvestorListGet>(`/admin/publish/investor/list`,{
		params
	})
}
/**
 * @description 查询律师列表 buildFnArrayCode
 * 
 * @return Promise<OAdminPublishLawyerListGetItem>
 */
export const adminPublishLawyerListGet = async (params?: IAdminPublishLawyerListGet) => {
	return get<OAdminPublishLawyerListGetItem[]>(`/admin/publish/lawyer/list`, {
		params
	})
}
/**
 * @description 查询素材列表 buildFnGetOrPostCode
 * 
 * @param {string} params.name 可选: 名称
 * @param {any[]} params.type 可选: 0: 'img', 1: 'pdf', 2: 'video', 3: 'html', 4: 'txt', 5: 'ppt', 6: 'xls', 7: 'doc', 8: 'zip', 9: 'file'
 * @param {number} params.category 可选: 1是批准书
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminPublishMaterialListGet>
 */
export const adminPublishMaterialListGet = async (params?: IAdminPublishMaterialListGet) => {
	return get<OAdminPublishMaterialListGet>(`/admin/publish/material/list`,{
		params
	})
}
/**
 * @description 查询文章列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 名称
 * @param {number} params.type 可选: 
 * @param {string} params.category 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminPublishNewsListGet>
 */
export const adminPublishNewsListGet = async (params?: IAdminPublishNewsListGet) => {
	return get<OAdminPublishNewsListGet>(`/admin/publish/news/list`,{
		params
	})
}
/**
 * @description 操作人列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.keyword 可选: 
 * @return Promise<OAdminPublishOperatorListGet>
 */
export const adminPublishOperatorListGet = async (params?: IAdminPublishOperatorListGet) => {
	return get<OAdminPublishOperatorListGet>(`/admin/publish/operator/list`,{
		params
	})
}
/**
 * @description 查询来源列表 buildFnGetOrPostCode
 * 
 * @param {number} params.seaId 可选: 公海ID
 * @param {string} params.name 可选: 来源名称
 * @return Promise<OAdminPublishOriginListGet>
 */
export const adminPublishOriginListGet = async (params?: IAdminPublishOriginListGet) => {
	return get<OAdminPublishOriginListGet>(`/admin/publish/origin/list`,{
		params
	})
}
/**
 * @description 获取手机号区号 buildFnArrayCode
 * 
 * @return Promise<OAdminPublishPhoneCodeListGetItem>
 */
export const adminPublishPhoneCodeListGet = async (params?: IAdminPublishPhoneCodeListGet) => {
	return get<OAdminPublishPhoneCodeListGetItem[]>(`/admin/publish/phone/code/list`, {
		params
	})
}
/**
 * @description 产品列表 buildFnGetOrPostCode
 * 
 * @param {string} params.productName 可选: 产品名称
 * @return Promise<OAdminPublishProductListGet>
 */
export const adminPublishProductListGet = async (params?: IAdminPublishProductListGet) => {
	return get<OAdminPublishProductListGet>(`/admin/publish/product/list`,{
		params
	})
}
/**
 * @description 在售产品列表 buildFnGetOrPostCode
 * 
 * @param {string} params.productName 可选: 产品名称
 * @return Promise<OAdminPublishProductSaleListGet>
 */
export const adminPublishProductSaleListGet = async (params?: IAdminPublishProductSaleListGet) => {
	return get<OAdminPublishProductSaleListGet>(`/admin/publish/product/sale/list`,{
		params
	})
}
/**
 * @description 产品类型列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminPublishProductTypeListGet>
 */
export const adminPublishProductTypeListGet = async (params?: IAdminPublishProductTypeListGet) => {
	return get<OAdminPublishProductTypeListGet>(`/admin/publish/product/type/list`,{
		params
	})
}
/**
 * @description 获取员工归属地 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 条件搜索
 * @return Promise<OAdminPublishPublishSysUserCityListGet>
 */
export const adminPublishPublishSysUserCityListGet = async (params?: IAdminPublishPublishSysUserCityListGet) => {
	return get<OAdminPublishPublishSysUserCityListGet>(`/admin/publish/publish/sysUser/city/list`,{
		params
	})
}
/**
 * @description 放弃/删除列表 buildFnPathCode
 * @path {number type 必填: 类型 0-放弃 1-删除}
 * @return Promise<OAdminPublishReasonListTypeGet>
 */
export const adminPublishReasonListTypeGet = async (type: number) => {
	return get<OAdminPublishReasonListTypeGet>(`/admin/publish/reason/list/${type}`)
}
/**
 * @description 查询公海列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 标题
 * @return Promise<OAdminPublishSeaListGet>
 */
export const adminPublishSeaListGet = async (params?: IAdminPublishSeaListGet) => {
	return get<OAdminPublishSeaListGet>(`/admin/publish/sea/list`,{
		params
	})
}
/**
 * @description 获取渠道列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminPublishSysChannelListGet>
 */
export const adminPublishSysChannelListGet = async (params?: IAdminPublishSysChannelListGet) => {
	return get<OAdminPublishSysChannelListGet>(`/admin/publish/sysChannel/list`,{
		params
	})
}
/**
 * @description 获取员工列表（一般用于线索里分配至员工） buildFnGetOrPostCode
 * 
 * @param {number} params.deptId 可选: 团队ID
 * @return Promise<OAdminPublishSysUserListByLoginUserGet>
 */
export const adminPublishSysUserListByLoginUserGet = async (params?: IAdminPublishSysUserListByLoginUserGet) => {
	return get<OAdminPublishSysUserListByLoginUserGet>(`/admin/publish/sysUser/list/byLoginUser`,{
		params
	})
}
/**
 * @description 查询所有标签 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminPublishTagListGet>
 */
export const adminPublishTagListGet = async (params?: IAdminPublishTagListGet) => {
	return get<OAdminPublishTagListGet>(`/admin/publish/tag/list`,{
		params
	})
}
/**
 * @description 查询我能看到的线索 buildFnGetOrPostCode
 * 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.keyword 可选: 
 * @param {string} params.investorIds 可选: 线索ids 多个以英文逗号分隔
 * @return Promise<OAdminPublishThreadListByLoginUserGet>
 */
export const adminPublishThreadListByLoginUserGet = async (params?: IAdminPublishThreadListByLoginUserGet) => {
	return get<OAdminPublishThreadListByLoginUserGet>(`/admin/publish/thread/list/byLoginUser`,{
		params
	})
}
/**
 * @description 查询所有线索 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminPublishThreadListGet>
 */
export const adminPublishThreadListGet = async (params?: IAdminPublishThreadListGet) => {
	return get<OAdminPublishThreadListGet>(`/admin/publish/thread/list`,{
		params
	})
}
/**
 * @description 查询待办事项类别列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminPublishTodoCategoryListGet>
 */
export const adminPublishTodoCategoryListGet = async (params?: IAdminPublishTodoCategoryListGet) => {
	return get<OAdminPublishTodoCategoryListGet>(`/admin/publish/todo/category/list`,{
		params
	})
}
/**
 * @description 上传文件-公共 buildFnFileCode
 * 
 * @param {file} params.files 必填: 
 * @return Promise<OAdminPublishUploadFilePost>
 */
export const adminPublishUploadFilePost = async (params?: IAdminPublishUploadFilePostFormData) => {
	return post<OAdminPublishUploadFilePost>(`/admin/publish/upload/file`, {
		params  
	})
}
/**
 * @description 上传文件-私有 buildFnFileCode
 * 
 * @param {file} params.files 必填: 
 * @return Promise<OAdminPublishUploadPrivateFilePost>
 */
export const adminPublishUploadPrivateFilePost = async (params?: IAdminPublishUploadPrivateFilePostFormData) => {
	return post<OAdminPublishUploadPrivateFilePost>(`/admin/publish/upload/private/file`, {
		params  
	})
}
/**
 * @description 删除原因 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminReasonIdDelete>
 */
export const adminReasonIdDelete = async (id: number) => {
	return del<OAdminReasonIdDelete>(`/admin/reason/${id}`)
}
/**
 * @description 查询放弃/删除详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminReasonIdGet>
 */
export const adminReasonIdGet = async (id: number) => {
	return get<OAdminReasonIdGet>(`/admin/reason/${id}`)
}
/**
 * @description 查询放弃/删除列表 buildFnPathCode
 * @path {number type 必填: 类型 0-放弃 1-删除}
 * @query {number} pageNum 可选: 
 * @query {number} pageSize 可选: 
 * @return Promise<OAdminReasonListTypeGet>
 */
export const adminReasonListTypeGet = async ({path, params}: IAdminReasonListTypeGetGroup) => {
	return get<OAdminReasonListTypeGet>(`/admin/reason/list/${path.type}`,{
		params
	})
}
/**
 * @description 添加放弃/删除原因 buildFnGetOrPostCode
 * 
 * @param {string} params.reason 必填: 内容
 * @param {number} params.type 必填: 类型 0-放弃 1-删除
 * @return Promise<OAdminReasonPost>
 */
export const adminReasonPost = async (params?: IAdminReasonPost) => {
	return post<OAdminReasonPost>(`/admin/reason`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑放弃/删除原因 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: ID
 * @param {string} params.reason 必填: 内容
 * @return Promise<OAdminReasonPut>
 */
export const adminReasonPut = async (params?: IAdminReasonPut) => {
	return put<OAdminReasonPut>(`/admin/reason`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑放弃/删除原因状态 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: ID
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @return Promise<OAdminReasonStatusPut>
 */
export const adminReasonStatusPut = async (params?: IAdminReasonStatusPut) => {
	return put<OAdminReasonStatusPut>(`/admin/reason/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询佣金记录 buildFnGetOrPostCode
 * 
 * @param {number} params.id 可选: 投资者ID
 * @param {number} params.pageNum 可选: 页码
 * @param {number} params.pageSize 可选: 条数
 * @param {string} params.rebateNo 可选: 佣金流水号
 * @param {string} params.investorNo 可选: 投资者编号
 * @param {string} params.investorEmail 可选: 投资者邮箱
 * @param {string} params.investorPhone 可选: 投资者手机
 * @param {string} params.investorName 可选: 投资者名称
 * @param {number} params.createById 可选: 操作人ID
 * @param {string} params.beginTime 可选: 充值时间
 * @param {string} params.endTime 可选: 充值时间
 * @param {number} params.minAmount 可选: 充值金额
 * @param {number} params.maxAmount 可选: 充值金额
 * @return Promise<OAdminRebateListGet>
 */
export const adminRebateListGet = async (params?: IAdminRebateListGet) => {
	return get<OAdminRebateListGet>(`/admin/rebate/list`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 添加佣金 buildFnGetOrPostCode
 * 
 * @param {number} params.amount 必填: 金额
 * @param {number} params.bankAccountId 必填: 银行卡账户ID
 * @param {number} params.investorId 必填: 投资者ID
 * @param {string} params.remark 可选: 备注
 * @return Promise<OAdminRebatePost>
 */
export const adminRebatePost = async (params?: IAdminRebatePost) => {
	return post<OAdminRebatePost>(`/admin/rebate`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 预约审核 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 预定ID
 * @param {string} params.reason 可选: 拒绝原因
 * @param {number} params.status 必填: 1-通过 2-拒绝
 * @return Promise<OAdminReserveAuditPost>
 */
export const adminReserveAuditPost = async (params?: IAdminReserveAuditPost) => {
	return post<OAdminReserveAuditPost>(`/admin/reserve/audit`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 预定列表 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0未处理 1已处理
 * @param {string} params.investorNo 可选: 
 * @param {string} params.investorName 可选: 
 * @param {string} params.investorEmail 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminReserveListGet>
 */
export const adminReserveListGet = async (params?: IAdminReserveListGet) => {
	return get<OAdminReserveListGet>(`/admin/reserve/list`,{
		params
	})
}
/**
 * @description 查询所有可用角色 buildFnArrayCode
 * 
 * @return Promise<OAdminRoleListAllGetItem>
 */
export const adminRoleListAllGet = async (params?: IAdminRoleListAllGet) => {
	return get<OAdminRoleListAllGetItem[]>(`/admin/role/list/all`, {
		params
	})
}
/**
 * @description 查询角色列表 buildFnArrayCode
 * 
 * @param {number} params.pageNum 可选: 当前页数
 * @param {number} params.pageSize 可选: 每页数量
 * @param {string} params.roleName 可选: 角色名称
 * @param {number} params.status 可选: 角色状态 0-正常 1-停用}
 * @return Promise<OAdminRoleListGetItem>
 */
export const adminRoleListGet = async (params?: IAdminRoleListGet) => {
	return get<OAdminRoleListGetItem[]>(`/admin/role/list`, {
		params
	})
}
/**
 * @description 修改角色权限 buildFnGetOrPostCode
 * 
 * @param {any[]} params.menuIds 必填: 菜单/接口ID集合
 * @param {string} params.menuType 必填: C-菜单 F-接口
 * @param {number} params.roleId 必填: 角色ID
 * @return Promise<OAdminRolePermsPut>
 */
export const adminRolePermsPut = async (params?: IAdminRolePermsPut) => {
	return put<OAdminRolePermsPut>(`/admin/role/perms`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 新增角色 buildFnGetOrPostCode
 * 
 * @param {any[]} params.menuIds 可选: 菜单id列表
 * @param {string} params.remark 可选: 备注
 * @param {number} params.roleId 可选: 角色id
 * @param {string} params.roleKey 可选: 角色key
 * @param {string} params.roleName 可选: 角色名称
 * @param {number} params.roleSort 可选: 角色排序
 * @param {number} params.status 可选: 角色状态 0-正常 1-停用
 * @return Promise<OAdminRolePost>
 */
export const adminRolePost = async (params?: IAdminRolePost) => {
	return post<OAdminRolePost>(`/admin/role`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改角色 buildFnGetOrPostCode
 * 
 * @param {any[]} params.menuIds 可选: 菜单id列表
 * @param {string} params.remark 可选: 备注
 * @param {number} params.roleId 可选: 角色id
 * @param {string} params.roleKey 可选: 角色key
 * @param {string} params.roleName 可选: 角色名称
 * @param {number} params.roleSort 可选: 角色排序
 * @param {number} params.status 可选: 角色状态 0-正常 1-停用
 * @return Promise<OAdminRolePut>
 */
export const adminRolePut = async (params?: IAdminRolePut) => {
	return put<OAdminRolePut>(`/admin/role`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除角色 buildFnPathCode
 * @path {number roleId 必填: }
 * @return Promise<OAdminRoleRoleIdDelete>
 */
export const adminRoleRoleIdDelete = async (roleId: number) => {
	return del<OAdminRoleRoleIdDelete>(`/admin/role/${roleId}`)
}
/**
 * @description 查询角色详情 buildFnPathCode
 * @path {number roleId 必填: }
 * @return Promise<OAdminRoleRoleIdGet>
 */
export const adminRoleRoleIdGet = async (roleId: number) => {
	return get<OAdminRoleRoleIdGet>(`/admin/role/${roleId}`)
}
/**
 * @description 删除公海 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminSeaIdDelete>
 */
export const adminSeaIdDelete = async (id: number) => {
	return del<OAdminSeaIdDelete>(`/admin/sea/${id}`)
}
/**
 * @description 公海详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminSeaIdGet>
 */
export const adminSeaIdGet = async (id: number) => {
	return get<OAdminSeaIdGet>(`/admin/sea/${id}`)
}
/**
 * @description 删除公海参与人 buildFnPathCode
 * @path {number joinId 必填: 参与ID}
 * @return Promise<OAdminSeaJoinUserJoinIdDelete>
 */
export const adminSeaJoinUserJoinIdDelete = async (joinId: number) => {
	return del<OAdminSeaJoinUserJoinIdDelete>(`/admin/sea/join/user/${joinId}`)
}
/**
 * @description 获取公海参与人列表 buildFnGetOrPostCode
 * 
 * @param {number} params.seaId 必填: 公海ID
 * @param {string} params.userName 可选: 用户名
 * @return Promise<OAdminSeaJoinUserListGet>
 */
export const adminSeaJoinUserListGet = async (params?: IAdminSeaJoinUserListGet) => {
	return get<OAdminSeaJoinUserListGet>(`/admin/sea/join/user/list`,{
		params
	})
}
/**
 * @description 添加公海参与人 buildFnGetOrPostCode
 * 
 * @param {number} params.seaId 必填: 公海ID
 * @param {any[]} params.userIds 必填: 员工ids
 * @return Promise<OAdminSeaJoinUserPost>
 */
export const adminSeaJoinUserPost = async (params?: IAdminSeaJoinUserPost) => {
	return post<OAdminSeaJoinUserPost>(`/admin/sea/join/user`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 公海列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminSeaListGet>
 */
export const adminSeaListGet = async (params?: IAdminSeaListGet) => {
	return get<OAdminSeaListGet>(`/admin/sea/list`,{
		params
	})
}
/**
 * @description 添加公海 buildFnGetOrPostCode
 * 
 * @param {number} params.allocationStatus 必填: 分配状态 0-手动 1-自动
 * @param {number} params.autoAllocation 可选: 自动分配 0-按员工ID 1-安权重
 * @param {number} params.autoSwitch 可选: 自动规则开关 0-关闭 1-打开
 * @param {any[]} params.autoTimeRule 可选: 
 * @param {any[]} params.autoWeekRule 可选: 自动规则时间-周
 * @param {number} params.choiceUserType 可选: 选择员工类型 0-全部 1-自定义
 * @param {number} params.msgNotify 可选: 消息提醒 0-不提醒 1-提醒
 * @param {any[]} params.seaDepts 可选: 员工列表
 * @param {string} params.title 必填: 标题
 * @return Promise<OAdminSeaPost>
 */
export const adminSeaPost = async (params?: IAdminSeaPost) => {
	return post<OAdminSeaPost>(`/admin/sea`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑公海 buildFnGetOrPostCode
 * 
 * @param {number} params.allocationStatus 必填: 分配状态 0-手动 1-自动
 * @param {number} params.autoAllocation 可选: 自动分配 0-按员工ID 1-安权重
 * @param {number} params.autoSwitch 可选: 自动规则开关 0-关闭 1-打开
 * @param {any[]} params.autoTimeRule 可选: 
 * @param {any[]} params.autoWeekRule 可选: 自动规则时间-周
 * @param {number} params.choiceUserType 可选: 选择员工类型 0-全部 1-自定义
 * @param {number} params.id 必填: id
 * @param {number} params.msgNotify 可选: 消息提醒 0-不提醒 1-提醒
 * @param {any[]} params.seaDepts 可选: 员工列表
 * @param {string} params.title 必填: 标题
 * @return Promise<OAdminSeaPut>
 */
export const adminSeaPut = async (params?: IAdminSeaPut) => {
	return put<OAdminSeaPut>(`/admin/sea`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑标签组选择范围 buildFnGetOrPostCode
 * 
 * @param {number} params.choice 必填: 选择范围 0-单选 1-多选
 * @param {number} params.groupId 可选: groupId
 * @return Promise<OAdminTagGroupChoicePut>
 */
export const adminTagGroupChoicePut = async (params?: IAdminTagGroupChoicePut) => {
	return put<OAdminTagGroupChoicePut>(`/admin/tag/group/choice`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除标签组 buildFnPathCode
 * @path {number groupId 必填: }
 * @return Promise<OAdminTagGroupGroupIdDelete>
 */
export const adminTagGroupGroupIdDelete = async (groupId: number) => {
	return del<OAdminTagGroupGroupIdDelete>(`/admin/tag/group/${groupId}`)
}
/**
 * @description 查询标签组列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminTagGroupListGet>
 */
export const adminTagGroupListGet = async (params?: IAdminTagGroupListGet) => {
	return get<OAdminTagGroupListGet>(`/admin/tag/group/list`,{
		params
	})
}
/**
 * @description 添加标签组 buildFnGetOrPostCode
 * 
 * @param {number} params.choice 必填: 选择范围 0-单选 1-多选
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @param {string} params.title 必填: 
 * @return Promise<OAdminTagGroupPost>
 */
export const adminTagGroupPost = async (params?: IAdminTagGroupPost) => {
	return post<OAdminTagGroupPost>(`/admin/tag/group`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑标签组 buildFnGetOrPostCode
 * 
 * @param {number} params.choice 必填: 选择范围 0-单选 1-多选
 * @param {number} params.groupId 可选: groupId
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @param {string} params.title 必填: 
 * @return Promise<OAdminTagGroupPut>
 */
export const adminTagGroupPut = async (params?: IAdminTagGroupPut) => {
	return put<OAdminTagGroupPut>(`/admin/tag/group`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑标签组状态 buildFnGetOrPostCode
 * 
 * @param {number} params.groupId 可选: groupId
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @return Promise<OAdminTagGroupStatusPut>
 */
export const adminTagGroupStatusPut = async (params?: IAdminTagGroupStatusPut) => {
	return put<OAdminTagGroupStatusPut>(`/admin/tag/group/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询标签列表-根据标签组ID buildFnGetOrPostCode
 * 
 * @param {number} params.groupId 可选: 标签组ID
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminTagListByGroupIdGet>
 */
export const adminTagListByGroupIdGet = async (params?: IAdminTagListByGroupIdGet) => {
	return get<OAdminTagListByGroupIdGet>(`/admin/tag/list/byGroupId`,{
		params
	})
}
/**
 * @description 添加标签 buildFnGetOrPostCode
 * 
 * @param {number} params.groupId 必填: 标签ID
 * @param {any[]} params.tags 必填: 
 * @return Promise<OAdminTagPost>
 */
export const adminTagPost = async (params?: IAdminTagPost) => {
	return post<OAdminTagPost>(`/admin/tag`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑标签 buildFnGetOrPostCode
 * 
 * @param {number} params.tagId 必填: 标签ID
 * @param {string} params.title 必填: 标签名
 * @return Promise<OAdminTagPut>
 */
export const adminTagPut = async (params?: IAdminTagPut) => {
	return put<OAdminTagPut>(`/admin/tag`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 编辑标签状态 buildFnGetOrPostCode
 * 
 * @param {number} params.status 必填: 状态 0-正常 1-禁用
 * @param {number} params.tagId 必填: 标签ID
 * @return Promise<OAdminTagStatusPut>
 */
export const adminTagStatusPut = async (params?: IAdminTagStatusPut) => {
	return put<OAdminTagStatusPut>(`/admin/tag/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 同步企业微信标签 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminTagSyncPost>
 */
export const adminTagSyncPost = async (params?: IAdminTagSyncPost) => {
	return post<OAdminTagSyncPost>(`/admin/tag/sync`,{
		params
	})
}
/**
 * @description 删除标签 buildFnPathCode
 * @path {number tagId 必填: }
 * @return Promise<OAdminTagTagIdDelete>
 */
export const adminTagTagIdDelete = async (tagId: number) => {
	return del<OAdminTagTagIdDelete>(`/admin/tag/${tagId}`)
}
/**
 * @description 用户线索添加跟进团队（线索详情-用户线索添加跟进团队-多团队） buildFnGetOrPostCode
 * 
 * @param {any[]} params.deptIds 必填: 团队ID集合
 * @param {number} params.investorId 必填: 线索ID
 * @return Promise<OAdminThreadAddDeptToThreadPost>
 */
export const adminThreadAddDeptToThreadPost = async (params?: IAdminThreadAddDeptToThreadPost) => {
	return post<OAdminThreadAddDeptToThreadPost>(`/admin/thread/addDeptToThread`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 团队添加线索（团队详情-团队添加线索-单团队） buildFnGetOrPostCode
 * 
 * @param {number} params.deptId 必填: 团队ID
 * @param {any[]} params.investorIds 必填: 线索ID集合
 * @return Promise<OAdminThreadAddThreadToDeptPost>
 */
export const adminThreadAddThreadToDeptPost = async (params?: IAdminThreadAddThreadToDeptPost) => {
	return post<OAdminThreadAddThreadToDeptPost>(`/admin/thread/addThreadToDept`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 全部客户列表-一般仅管理员有权限 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 搜索查询
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.statusLevel 可选: 0-待跟进 1-跟进中 2-待审核 3-重要客户 4-待分配 5-已分配 9-全部
 * @param {number} params.employeeId 可选: 跟进人
 * @param {number} params.important 可选: 是否标记为重点 0-否 1-是
 * @param {number} params.customerStatus 可选: 客户状态 0-强意愿 1-有效 2-长期 3-无效
 * @param {string} params.city 可选: 城市
 * @param {number} params.productId 可选: 产品id
 * @param {number} params.newThread 可选: 新线索 固定值 1
 * @param {string} params.userCity 可选: 员工归属地
 * @param {number} params.tagId 可选: 标签ID
 * @param {number} params.deptId 可选: 团队ID
 * @param {string} params.timeday 可选: today yesterday week month
 * @param {string} params.personageTag 可选: 个人标签
 * @param {string} params.productType 可选: 意向产品类型
 * @param {number} params.tranStatus 可选: 成交状态 0-未签约 1-签约 2-复购 9-退出
 * @param {number} params.followStatus 可选: 线索状态 0-线索 2-有效 8-长期
 * @param {number} params.primaryFollowerId 可选: 主跟进人ID
 * @param {string} params.province 可选: 省份
 * @param {string} params.followRecordKeyword 可选: 旅程内容搜索
 * @return Promise<OAdminThreadAllListGet>
 */
export const adminThreadAllListGet = async (params?: IAdminThreadAllListGet) => {
	return get<OAdminThreadAllListGet>(`/admin/thread/all/list`,{
		params
	})
}
/**
 * @description 分配客户（支持分配给多个团队里的多个人） buildFnGetOrPostCode
 * 
 * @param {any[]} params.depts 必填: 部门集合
 * @param {number} params.investorId 必填: 
 * @return Promise<OAdminThreadAllocationPost>
 */
export const adminThreadAllocationPost = async (params?: IAdminThreadAllocationPost) => {
	return post<OAdminThreadAllocationPost>(`/admin/thread/allocation`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 审核申请 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 
 * @param {number} params.realDeptId 可选: 团队ID
 * @param {string} params.reason 可选: 驳回原因
 * @param {number} params.status 必填: 1-通过 2-驳回
 * @return Promise<OAdminThreadApplyAuditPost>
 */
export const adminThreadApplyAuditPost = async (params?: IAdminThreadApplyAuditPost) => {
	return post<OAdminThreadApplyAuditPost>(`/admin/thread/apply/audit`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 线索申请至团队 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 线索ID
 * @param {string} params.remark 必填: 备注信息
 * @return Promise<OAdminThreadApplyPost>
 */
export const adminThreadApplyPost = async (params?: IAdminThreadApplyPost) => {
	return post<OAdminThreadApplyPost>(`/admin/thread/apply`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 放弃/删除审核详情 buildFnPathCode
 * @path {string id 必填: }
 * @return Promise<OAdminThreadAuditDetailIdGet>
 */
export const adminThreadAuditDetailIdGet = async (id: string) => {
	return get<OAdminThreadAuditDetailIdGet>(`/admin/thread/audit/detail/${id}`)
}
/**
 * @description 放弃/删除审核列表 buildFnPathCode
 * @path {number type 必填: 类型 0-放弃 1-删除 2-转让 3-申请 4-意向等级 5-成交状态 -1全部}
 * @query {string} keyword 可选: 
 * @query {number} status 可选: 状态 0-待审核 1-审核通过 2-审核不通过 3-删除客户/放弃客户 9-已撤销
 * @query {number} deptId 可选: 团队ID
 * @return Promise<OAdminThreadAuditListTypeGet>
 */
export const adminThreadAuditListTypeGet = async ({path, params}: IAdminThreadAuditListTypeGetGroup) => {
	return get<OAdminThreadAuditListTypeGet>(`/admin/thread/audit/list/${path.type}`,{
		params
	})
}
/**
 * @description 审核 放弃/删除审核 buildFnGetOrPostCode
 * 
 * @param {any[]} params.ids 必填: 
 * @param {number} params.realDeptId 可选: 团队ID
 * @param {string} params.reason 可选: 驳回理由
 * @param {number} params.seaId 可选: 公海ID 放弃-通过时
 * @param {number} params.status 必填: 1-通过 2-不通过
 * @return Promise<OAdminThreadAuditPost>
 */
export const adminThreadAuditPost = async (params?: IAdminThreadAuditPost) => {
	return post<OAdminThreadAuditPost>(`/admin/thread/audit`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 批量添加跟进部门 buildFnGetOrPostCode
 * 
 * @param {any[]} params.deptIds 必填: 团队ID集合
 * @param {any[]} params.investorIds 必填: 线索IDs
 * @return Promise<OAdminThreadBatchAddDeptToThreadPost>
 */
export const adminThreadBatchAddDeptToThreadPost = async (params?: IAdminThreadBatchAddDeptToThreadPost) => {
	return post<OAdminThreadBatchAddDeptToThreadPost>(`/admin/thread/batchAddDeptToThread`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 批量添加跟进人 buildFnGetOrPostCode
 * 
 * @param {any[]} params.depts 必填: 部门集合
 * @param {any[]} params.investorIds 必填: 线索ids
 * @return Promise<OAdminThreadBatchAllocationPost>
 */
export const adminThreadBatchAllocationPost = async (params?: IAdminThreadBatchAllocationPost) => {
	return post<OAdminThreadBatchAllocationPost>(`/admin/thread/batchAllocation`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 拨号 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {string} params.phoneId 必填: 手机号id
 * @return Promise<OAdminThreadCallPhonePost>
 */
export const adminThreadCallPhonePost = async (params?: IAdminThreadCallPhonePost) => {
	return post<OAdminThreadCallPhonePost>(`/admin/thread/call/phone`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 检查电销手机是否登录 buildFnGetOrPostCode
 * 
 * @return Promise<number>
 */
export const adminThreadCheckDxLoginPost = async (params?: IAdminThreadCheckDxLoginPost) => {
	return post<number>(`/admin/thread/check/dxLogin`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 更改客户意向项目 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资者ID
 * @param {any[]} params.productTypes 必填: 产品类型
 * @return Promise<OAdminThreadCustomerProductPost>
 */
export const adminThreadCustomerProductPost = async (params?: IAdminThreadCustomerProductPost) => {
	return post<OAdminThreadCustomerProductPost>(`/admin/thread/customer/product`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 更改客户意向状态 buildFnGetOrPostCode
 * 
 * @param {number} params.customerStatus 必填: 客户状态 0-强意愿 1-有效 2-长期 9-无效
 * @param {number} params.investorId 必填: 投资者ID
 * @param {number} params.isAudit 可选: 是否需要审核 1-审核
 * @param {string} params.remark 可选: 
 * @return Promise<OAdminThreadCustomerStatusPost>
 */
export const adminThreadCustomerStatusPost = async (params?: IAdminThreadCustomerStatusPost) => {
	return post<OAdminThreadCustomerStatusPost>(`/admin/thread/customer/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资人ID
 * @param {number} params.reasonId 必填: 原因ID
 * @param {string} params.remark 可选: 备注
 * @return Promise<OAdminThreadDeletePost>
 */
export const adminThreadDeletePost = async (params?: IAdminThreadDeletePost) => {
	return post<OAdminThreadDeletePost>(`/admin/thread/delete`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 团队移除线索 buildFnGetOrPostCode
 * 
 * @param {number} params.deptId 必填: 部门ID
 * @param {any[]} params.investorIds 必填: 线索ID集合
 * @return Promise<OAdminThreadDelThreadForDeptPost>
 */
export const adminThreadDelThreadForDeptPost = async (params?: IAdminThreadDelThreadForDeptPost) => {
	return post<OAdminThreadDelThreadForDeptPost>(`/admin/thread/delThreadForDept`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 团队客户列表-一般仅管理员和负责人有权限 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 搜索查询
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.statusLevel 可选: 0-待跟进 1-跟进中 2-待审核 3-重要客户 4-待分配 5-已分配 9-全部
 * @param {number} params.employeeId 可选: 跟进人
 * @param {number} params.important 可选: 是否标记为重点 0-否 1-是
 * @param {number} params.customerStatus 可选: 客户状态 0-强意愿 1-有效 2-长期 3-无效
 * @param {string} params.city 可选: 城市
 * @param {number} params.productId 可选: 产品id
 * @param {number} params.newThread 可选: 新线索 固定值 1
 * @param {string} params.userCity 可选: 员工归属地
 * @param {string} params.tagIds 可选: 标签ID 多个以英文逗号隔开
 * @param {number} params.deptId 可选: 团队ID
 * @param {string} params.timeday 可选: today yesterday week month
 * @param {string} params.personageTag 可选: 个人标签
 * @param {string} params.productType 可选: 意向产品类型
 * @param {number} params.tranStatus 可选: 成交状态 0-未签约 1-签约 2-复购 9-退出
 * @param {number} params.followStatus 可选: 线索状态 0-线索 2-有效 8-长期
 * @param {number} params.primaryFollowerId 可选: 主跟进人ID
 * @param {string} params.province 可选: 省份
 * @param {string} params.startTime 可选: 开始时间
 * @param {string} params.endTime 可选: 结束时间
 * @param {string} params.followRecordKeyword 可选: 旅程内容搜索
 * @param {string} params.sortField 可选: 排序  followTimeAsc-跟进时间升序； followTimeDesc-跟进时间倒序； createTimeAsc-获取时间升序 ；createTimeDesc-获取时间倒序
 * @param {number} params.originId 可选: 
 * @return Promise<OAdminThreadDeptListGet>
 */
export const adminThreadDeptListGet = async (params?: IAdminThreadDeptListGet) => {
	return get<OAdminThreadDeptListGet>(`/admin/thread/dept/list`,{
		params
	})
}
/**
 * @description 下载导出 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 
 * @return Promise<OAdminThreadDownloadPost>
 */
export const adminThreadDownloadPost = async (params?: IAdminThreadDownloadPost) => {
	return post<OAdminThreadDownloadPost>(`/admin/thread/download`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询签约详情 buildFnGetOrPostCode
 * 
 * @param {number} params.id 可选: 
 * @return Promise<OAdminThreadEmployeeConcludeDetailGet>
 */
export const adminThreadEmployeeConcludeDetailGet = async (params?: IAdminThreadEmployeeConcludeDetailGet) => {
	return get<OAdminThreadEmployeeConcludeDetailGet>(`/admin/thread/employee/conclude/detail`,{
		params
	})
}
/**
 * @description 删除签约 buildFnPathCode
 * @path {number id 必填: 主键ID}
 * @return Promise<OAdminThreadEmployeeConcludeIdDelete>
 */
export const adminThreadEmployeeConcludeIdDelete = async (id: number) => {
	return del<OAdminThreadEmployeeConcludeIdDelete>(`/admin/thread/employee/conclude/${id}`)
}
/**
 * @description 查询签约列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminThreadEmployeeConcludeListGet>
 */
export const adminThreadEmployeeConcludeListGet = async (params?: IAdminThreadEmployeeConcludeListGet) => {
	return get<OAdminThreadEmployeeConcludeListGet>(`/admin/thread/employee/conclude/list`,{
		params
	})
}
/**
 * @description 新增签约 buildFnGetOrPostCode
 * 
 * @param {string} params.concludeTime 必填: 签单时间
 * @param {any[]} params.employeeData 必填: 
 * @param {number} params.investorId 必填: 线索ID
 * @param {string} params.remark 可选: 备注描述
 * @return Promise<OAdminThreadEmployeeConcludePost>
 */
export const adminThreadEmployeeConcludePost = async (params?: IAdminThreadEmployeeConcludePost) => {
	return post<OAdminThreadEmployeeConcludePost>(`/admin/thread/employee/conclude`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改签约 buildFnGetOrPostCode
 * 
 * @param {string} params.concludeTime 必填: 签单时间
 * @param {any[]} params.employeeData 必填: 
 * @param {number} params.id 必填: 主键ID
 * @param {string} params.remark 可选: 备注描述
 * @return Promise<OAdminThreadEmployeeConcludePut>
 */
export const adminThreadEmployeeConcludePut = async (params?: IAdminThreadEmployeeConcludePut) => {
	return put<OAdminThreadEmployeeConcludePut>(`/admin/thread/employee/conclude`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询签约排行榜 buildFnPathCode
 * @path {string type 必填: all-总排行 curMonth-当月 preMonth-上月 threeMonth-近3月}
 * @return Promise<OAdminThreadEmployeeConcludeRankTypeGet>
 */
export const adminThreadEmployeeConcludeRankTypeGet = async (type: string) => {
	return get<OAdminThreadEmployeeConcludeRankTypeGet>(`/admin/thread/employee/conclude/rank/${type}`)
}
/**
 * @description 获取导出列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.position 可选: 位置 sea team mine
 * @param {number} params.status 可选: 状态 0-打包中 1-打包完成 2-打包失败
 * @param {number} params.createById 可选: 下载人ID
 * @return Promise<OAdminThreadExportListGet>
 */
export const adminThreadExportListGet = async (params?: IAdminThreadExportListGet) => {
	return get<OAdminThreadExportListGet>(`/admin/thread/export/list`,{
		params
	})
}
/**
 * @description 数据导出 buildFnGetOrPostCode
 * 
 * @param {string} params.position 必填: 位置 'sea','team','mine'
 * @param {any} params.queryParams 必填: 查询参数
 * @return Promise<OAdminThreadExportPost>
 */
export const adminThreadExportPost = async (params?: IAdminThreadExportPost) => {
	return post<OAdminThreadExportPost>(`/admin/thread/export`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 客户详情-跟进企微联系人ID buildFnPathCode
 * @path {string externalUserId 必填: 企业微信联系人ID}
 * @return Promise<OAdminThreadExternalExternalUserIdGet>
 */
export const adminThreadExternalExternalUserIdGet = async (externalUserId: string) => {
	return get<OAdminThreadExternalExternalUserIdGet>(`/admin/thread/external/${externalUserId}`)
}
/**
 * @description 旅程列表 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资者ID
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.followRecordKeyword 可选: 
 * @return Promise<OAdminThreadFollowRecordGet>
 */
export const adminThreadFollowRecordGet = async (params?: IAdminThreadFollowRecordGet) => {
	return get<OAdminThreadFollowRecordGet>(`/admin/thread/follow/record`,{
		params
	})
}
/**
 * @description 添加旅程 buildFnGetOrPostCode
 * 
 * @param {string} params.completeTime 必填: 完成时间
 * @param {string} params.content 必填: 跟进内容
 * @param {any[]} params.fileList 可选: 附件集合
 * @param {number} params.followStatus 必填: 跟进状态
 * @param {number} params.investorId 必填: 投资者ID
 * @return Promise<OAdminThreadFollowRecordPost>
 */
export const adminThreadFollowRecordPost = async (params?: IAdminThreadFollowRecordPost) => {
	return post<OAdminThreadFollowRecordPost>(`/admin/thread/follow/record`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 变更跟进状态 buildFnGetOrPostCode
 * 
 * @param {number} params.followStatus 必填: 跟进状态
 * @param {number} params.investorId 必填: 投资者ID
 * @return Promise<OAdminThreadFollowStatusPut>
 */
export const adminThreadFollowStatusPut = async (params?: IAdminThreadFollowStatusPut) => {
	return put<OAdminThreadFollowStatusPut>(`/admin/thread/follow/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 放弃 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资人ID
 * @param {number} params.reasonId 必填: 原因ID
 * @param {string} params.remark 可选: 备注
 * @return Promise<OAdminThreadGiveupPost>
 */
export const adminThreadGiveupPost = async (params?: IAdminThreadGiveupPost) => {
	return post<OAdminThreadGiveupPost>(`/admin/thread/giveup`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 客户详情 buildFnPathCode
 * @path {number id 必填: 投资者ID}
 * @return Promise<OAdminThreadIdGet>
 */
export const adminThreadIdGet = async (id: number) => {
	return get<OAdminThreadIdGet>(`/admin/thread/${id}`)
}
/**
 * @description 标记为重要/不重要客户 buildFnGetOrPostCode
 * 
 * @param {number} params.important 必填: 是否标记为重点 0-否 1-是
 * @param {number} params.investorId 必填: 
 * @return Promise<OAdminThreadImportantPost>
 */
export const adminThreadImportantPost = async (params?: IAdminThreadImportantPost) => {
	return post<OAdminThreadImportantPost>(`/admin/thread/important`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 公海客户列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {number} params.seaId 可选: 公海ID 0-未知公海 空字符串或不传-全部
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.important 可选: 是否标记为重点 0-否 1-是
 * @param {number} params.customerStatus 可选: 客户状态 0-强意愿 1-有效 2-长期 3-无效
 * @param {string} params.city 可选: 城市
 * @param {number} params.productId 可选: 产品ID
 * @param {number} params.newThread 可选: 新线索 固定值 1
 * @param {string} params.province 可选: 省份
 * @param {string} params.channelId 可选: 
 * @param {string} params.sortField 可选: 排序  followTimeAsc-跟进时间升序； followTimeDesc-跟进时间倒序； createTimeAsc-获取时间升序 ；createTimeDesc-获取时间倒序
 * @param {string} params.tagIds 可选: 企业标签ids 多个以英文逗号隔开
 * @param {number} params.originId 可选: 来源ID
 * @return Promise<OAdminThreadListGet>
 */
export const adminThreadListGet = async (params?: IAdminThreadListGet) => {
	return get<OAdminThreadListGet>(`/admin/thread/list`,{
		params
	})
}
/**
 * @description 获取合并后的基本信息 buildFnGetOrPostCode
 * 
 * @param {any[]} params.mergeData 必填: 
 * @return Promise<OAdminThreadMergeBaseInfoPost>
 */
export const adminThreadMergeBaseInfoPost = async (params?: IAdminThreadMergeBaseInfoPost) => {
	return post<OAdminThreadMergeBaseInfoPost>(`/admin/thread/merge/base/info`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取合并后的旅程信息 buildFnGetOrPostCode
 * 
 * @param {string} params.followRecordKeyword 可选: 
 * @param {any[]} params.mergeData 必填: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminThreadMergeFollowRecordPost>
 */
export const adminThreadMergeFollowRecordPost = async (params?: IAdminThreadMergeFollowRecordPost) => {
	return post<OAdminThreadMergeFollowRecordPost>(`/admin/thread/merge/follow/record`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 合并线索 buildFnGetOrPostCode
 * 
 * @param {any[]} params.mergeData 必填: 
 * @return Promise<OAdminThreadMergePost>
 */
export const adminThreadMergePost = async (params?: IAdminThreadMergePost) => {
	return post<OAdminThreadMergePost>(`/admin/thread/merge`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 我的客户列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 搜索查询
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.statusLevel 可选: 0-待跟进 1-跟进中 2-待审核 3-重要客户 4-待分配 5-已分配 9-全部
 * @param {number} params.important 可选: 是否标记为重点 0-否 1-是
 * @param {number} params.customerStatus 可选: 客户状态 0-强意愿 1-有效 2-长期 3-无效
 * @param {string} params.city 可选: 城市
 * @param {number} params.productId 可选: 产品id
 * @param {string} params.newThread 可选: 新线索 固定值 1
 * @param {string} params.userCity 可选: 员工归属地
 * @param {string} params.tagIds 可选: 标签ID 多个以英文逗号隔开
 * @param {number} params.deptId 可选: 团队ID
 * @param {string} params.timeday 可选: today yesterday week month
 * @param {string} params.personageTag 可选: 个人标签
 * @param {string} params.productType 可选: 意向产品类型
 * @param {number} params.tranStatus 可选: 成交状态 0-未签约 1-签约 2-复购 9-退出
 * @param {number} params.followStatus 可选: 线索状态 0-线索 2-有效 8-长期
 * @param {number} params.primaryFollowerId 可选: 主跟进人ID
 * @param {string} params.province 可选: 省份
 * @param {string} params.followRecordKeyword 可选: 旅程内容搜索
 * @param {string} params.sortField 可选: 排序  followTimeAsc-跟进时间升序； followTimeDesc-跟进时间倒序； createTimeAsc-获取时间升序 ；createTimeDesc-获取时间倒序
 * @param {number} params.originId 可选: 
 * @return Promise<OAdminThreadMineListGet>
 */
export const adminThreadMineListGet = async (params?: IAdminThreadMineListGet) => {
	return get<OAdminThreadMineListGet>(`/admin/thread/mine/list`,{
		params
	})
}
/**
 * @description 删除个人标签（根据用户删除所有线索下的标签） buildFnGetOrPostCode
 * 
 * @param {string} params.tagName 必填: 标签名
 * @return Promise<OAdminThreadPersonageTagAllDelete>
 */
export const adminThreadPersonageTagAllDelete = async (params?: IAdminThreadPersonageTagAllDelete) => {
	return del<OAdminThreadPersonageTagAllDelete>(`/admin/thread/personage/tag/all`,{
		params
	})
}
/**
 * @description 所有的个人标签 buildFnGetOrPostCode
 * 
 * @param {string} params.name 可选: 标签名
 * @return Promise<OAdminThreadPersonageTagAlllistGet>
 */
export const adminThreadPersonageTagAlllistGet = async (params?: IAdminThreadPersonageTagAlllistGet) => {
	return get<OAdminThreadPersonageTagAlllistGet>(`/admin/thread/personage/tag/alllist`,{
		params
	})
}
/**
 * @description 删除个人标签 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminThreadPersonageTagIdDelete>
 */
export const adminThreadPersonageTagIdDelete = async (id: number) => {
	return del<OAdminThreadPersonageTagIdDelete>(`/admin/thread/personage/tag/${id}`)
}
/**
 * @description 我的个人标签 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminThreadPersonageTagMinelistGet>
 */
export const adminThreadPersonageTagMinelistGet = async (params?: IAdminThreadPersonageTagMinelistGet) => {
	return get<OAdminThreadPersonageTagMinelistGet>(`/admin/thread/personage/tag/minelist`,{
		params
	})
}
/**
 * @description 添加个人标签 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 线索ID
 * @param {string} params.name 必填: 标签名称
 * @return Promise<OAdminThreadPersonageTagPost>
 */
export const adminThreadPersonageTagPost = async (params?: IAdminThreadPersonageTagPost) => {
	return post<OAdminThreadPersonageTagPost>(`/admin/thread/personage/tag`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 生成手机号随机串 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {string} params.phoneId 必填: 手机号ID
 * @return Promise<OAdminThreadPhoneHashcodePost>
 */
export const adminThreadPhoneHashcodePost = async (params?: IAdminThreadPhoneHashcodePost) => {
	return post<OAdminThreadPhoneHashcodePost>(`/admin/thread/phone/hashcode`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 添加客户 buildFnGetOrPostCode
 * 
 * @param {string} params.callId 可选: 通话记录ID
 * @param {string} params.city 可选: 城市
 * @param {number} params.customerStatus 可选: 客户状态 0-强意愿 1-有效 2-长期 9-无效
 * @param {any[]} params.depts 可选: 部门集合
 * @param {string} params.email 可选: 邮箱
 * @param {string} params.externalType 可选: 0未知 1微信用户 2企业微信用户 3普通其他用户
 * @param {string} params.externalUserId 可选: 企业微信外部用户ID
 * @param {number} params.followStatus 可选: 最近跟进状态
 * @param {number} params.important 可选: 是否标记为重点 0-否 1-是
 * @param {string} params.lastFollowRemark 可选: 最近跟进描述
 * @param {string} params.lastFollowTime 可选: 最近跟进时间
 * @param {number} params.originId 可选: 来源ID
 * @param {any[]} params.phoneList 必填: 手机号集合
 * @param {any[]} params.productIds 可选: 意向产品ids
 * @param {string} params.promotionAddress 可选: 推广页地址
 * @param {string} params.province 可选: 省份
 * @param {string} params.remark 可选: 客户备注
 * @param {number} params.seaId 必填: 公海ID
 * @param {any[]} params.tagIds 可选: 标签ids
 * @param {string} params.unionid 可选: 企业微信外部unionid
 * @param {any[]} params.userGroupIds 可选: 客户组IDs
 * @param {string} params.userName 必填: 姓名
 * @param {string} params.wechat 可选: 微信号
 * @param {string} params.wechatName 可选: 微信昵称
 * @param {string} params.wechatUserId 可选: 企业微信员工ID
 * @return Promise<OAdminThreadPost>
 */
export const adminThreadPost = async (params?: IAdminThreadPost) => {
	return post<OAdminThreadPost>(`/admin/thread`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取主跟进人列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminThreadPrimaryFollowerListGet>
 */
export const adminThreadPrimaryFollowerListGet = async (params?: IAdminThreadPrimaryFollowerListGet) => {
	return get<OAdminThreadPrimaryFollowerListGet>(`/admin/thread/primary/follower/list`,{
		params
	})
}
/**
 * @description 设置主跟进人 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 线索ID
 * @param {number} params.userId 必填: 员工ID
 * @return Promise<OAdminThreadPrimaryFollowerPost>
 */
export const adminThreadPrimaryFollowerPost = async (params?: IAdminThreadPrimaryFollowerPost) => {
	return post<OAdminThreadPrimaryFollowerPost>(`/admin/thread/primary/follower`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取所有线索（不关心有无被分配，可用于添加线索到团队，该API一般不需要权限控制） buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 搜索查询
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.statusLevel 可选: 0-待跟进 1-跟进中 2-待审核 3-重点客户 9-全部
 * @param {number} params.employeeId 可选: 跟进人
 * @param {number} params.important 可选: 是否标记为重点 0-否 1-是
 * @param {number} params.customerStatus 可选: 客户状态 0-强意愿 1-有效 2-长期 3-无效
 * @param {string} params.city 可选: 城市
 * @param {number} params.productId 可选: 产品id
 * @param {number} params.newThread 可选: 新线索 固定值 1
 * @param {string} params.userCity 可选: 员工归属地
 * @param {number} params.tagId 可选: 标签ID
 * @param {number} params.deptId 必填: 团队ID，该ID必填写，用于返回线索列表时是否存在该团队
 * @param {string} params.personageTag 可选: 个人标签
 * @param {string} params.productType 可选: 意向产品类型
 * @param {string} params.channelId 可选: 渠道ID
 * @param {number} params.concludeStatus 可选: 是否签单 固定值 1
 * @return Promise<OAdminThreadPublicAllListGet>
 */
export const adminThreadPublicAllListGet = async (params?: IAdminThreadPublicAllListGet) => {
	return get<OAdminThreadPublicAllListGet>(`/admin/thread/public/allList`,{
		params
	})
}
/**
 * @description 编辑客户 buildFnGetOrPostCode
 * 
 * @param {string} params.city 可选: 城市
 * @param {string} params.email 可选: 邮箱
 * @param {number} params.investorId 必填: 
 * @param {number} params.originId 可选: 来源ID
 * @param {any[]} params.phoneList 可选: 手机号集合
 * @param {string} params.province 可选: 省份
 * @param {string} params.remark 可选: 客户备注
 * @param {any[]} params.tagIds 可选: 标签ids
 * @param {any[]} params.userGroupIds 可选: 客户组IDs
 * @param {string} params.userName 必填: 姓名
 * @param {string} params.wechat 可选: 微信号
 * @param {string} params.wechatName 可选: 微信昵称
 * @return Promise<OAdminThreadPut>
 */
export const adminThreadPut = async (params?: IAdminThreadPut) => {
	return put<OAdminThreadPut>(`/admin/thread`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 领取线索 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @return Promise<OAdminThreadReceivePost>
 */
export const adminThreadReceivePost = async (params?: IAdminThreadReceivePost) => {
	return post<OAdminThreadReceivePost>(`/admin/thread/receive`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 回收站客户列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminThreadRecycleListGet>
 */
export const adminThreadRecycleListGet = async (params?: IAdminThreadRecycleListGet) => {
	return get<OAdminThreadRecycleListGet>(`/admin/thread/recycle/list`,{
		params
	})
}
/**
 * @description 撤销 buildFnGetOrPostCode
 * 
 * @param {number} params.transferRecordId 必填: 记录ID
 * @return Promise<OAdminThreadRevokePost>
 */
export const adminThreadRevokePost = async (params?: IAdminThreadRevokePost) => {
	return post<OAdminThreadRevokePost>(`/admin/thread/revoke`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 发送短信 buildFnGetOrPostCode
 * 
 * @param {string} params.content 必填: 短信内容
 * @param {number} params.investorId 必填: 
 * @param {string} params.phoneId 必填: 手机号ID
 * @return Promise<OAdminThreadSmsPhonePost>
 */
export const adminThreadSmsPhonePost = async (params?: IAdminThreadSmsPhonePost) => {
	return post<OAdminThreadSmsPhonePost>(`/admin/thread/sms/phone`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取跟进状态 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminThreadStatusListGet>
 */
export const adminThreadStatusListGet = async (params?: IAdminThreadStatusListGet) => {
	return get<OAdminThreadStatusListGet>(`/admin/thread/status/list`,{
		params
	})
}
/**
 * @description 修改客户标签 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {any[]} params.tagIds 必填: 
 * @return Promise<OAdminThreadTagPut>
 */
export const adminThreadTagPut = async (params?: IAdminThreadTagPut) => {
	return put<OAdminThreadTagPut>(`/admin/thread/tag`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 转让 buildFnGetOrPostCode
 * 
 * @param {number} params.employeeId 必填: 员工ID
 * @param {number} params.investorId 必填: 投资人ID
 * @return Promise<OAdminThreadTransferPost>
 */
export const adminThreadTransferPost = async (params?: IAdminThreadTransferPost) => {
	return post<OAdminThreadTransferPost>(`/admin/thread/transfer`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 申请成交状态 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资者ID
 * @param {string} params.remark 可选: 备注
 * @param {number} params.tranStatus 必填: 成交状态 0-未签约 1-签约 2-复购 9-退出
 * @return Promise<OAdminThreadTranStatusApplyPost>
 */
export const adminThreadTranStatusApplyPost = async (params?: IAdminThreadTranStatusApplyPost) => {
	return post<OAdminThreadTranStatusApplyPost>(`/admin/thread/tran/status/apply`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 更改成交状态 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 投资者ID
 * @param {number} params.isAudit 可选: 是否需审核 1-是
 * @param {string} params.remark 可选: 备注
 * @param {number} params.tranStatus 必填: 成交状态 0-未签约 1-签约 2-复购 9-退出
 * @return Promise<OAdminThreadTranStatusPost>
 */
export const adminThreadTranStatusPost = async (params?: IAdminThreadTranStatusPost) => {
	return post<OAdminThreadTranStatusPost>(`/admin/thread/tran/status`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 最新未跟进消息提醒统计信息 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminThreadUnfollowRemindInfoGet>
 */
export const adminThreadUnfollowRemindInfoGet = async (params?: IAdminThreadUnfollowRemindInfoGet) => {
	return get<OAdminThreadUnfollowRemindInfoGet>(`/admin/thread/unfollow/remind/info`,{
		params
	})
}
/**
 * @description 最新未跟进消息提醒列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.keyword 可选: 用户名/手机号/客户分组
 * @param {number} params.day 可选: 3/5/10
 * @return Promise<OAdminThreadUnfollowRemindListGet>
 */
export const adminThreadUnfollowRemindListGet = async (params?: IAdminThreadUnfollowRemindListGet) => {
	return get<OAdminThreadUnfollowRemindListGet>(`/admin/thread/unfollow/remind/list`,{
		params
	})
}
/**
 * @description 查询客户组 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminThreadUserGroupListGet>
 */
export const adminThreadUserGroupListGet = async (params?: IAdminThreadUserGroupListGet) => {
	return get<OAdminThreadUserGroupListGet>(`/admin/thread/user/group/list`,{
		params
	})
}
/**
 * @description 添加客户组 buildFnGetOrPostCode
 * 
 * @param {string} params.title 必填: 客户组名
 * @return Promise<OAdminThreadUserGroupPost>
 */
export const adminThreadUserGroupPost = async (params?: IAdminThreadUserGroupPost) => {
	return post<OAdminThreadUserGroupPost>(`/admin/thread/user/group`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 批量添加任务 buildFnGetOrPostCode
 * 
 * @param {string} params.category 必填: 主任务 类别
 * @param {number} params.deptId 必填: 主任务部门ID
 * @param {any[]} params.subTodoList 可选: 
 * @param {string} params.title 必填: 主任务标题
 * @return Promise<OAdminTodoBatchPost>
 */
export const adminTodoBatchPost = async (params?: IAdminTodoBatchPost) => {
	return post<OAdminTodoBatchPost>(`/admin/todo/batch`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取更变历史 buildFnGetOrPostCode
 * 
 * @param {number} params.todoId 必填: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminTodoChangeListGet>
 */
export const adminTodoChangeListGet = async (params?: IAdminTodoChangeListGet) => {
	return get<OAdminTodoChangeListGet>(`/admin/todo/change/list`,{
		params
	})
}
/**
 * @description 获取评论列表 buildFnGetOrPostCode
 * 
 * @param {number} params.todoId 必填: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OAdminTodoCommentListGet>
 */
export const adminTodoCommentListGet = async (params?: IAdminTodoCommentListGet) => {
	return get<OAdminTodoCommentListGet>(`/admin/todo/comment/list`,{
		params
	})
}
/**
 * @description 添加评论 buildFnGetOrPostCode
 * 
 * @param {string} params.content 必填: 
 * @param {any[]} params.eitUserIds 可选: @的人  @全部时 固定值为 *
 * @param {any[]} params.fileList 必填: 
 * @param {number} params.todoId 必填: 任务/子任务ID
 * @return Promise<OAdminTodoCommentPost>
 */
export const adminTodoCommentPost = async (params?: IAdminTodoCommentPost) => {
	return post<OAdminTodoCommentPost>(`/admin/todo/comment`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 完成/取消完成待办 buildFnGetOrPostCode
 * 
 * @param {number} params.status 必填: 1-完成 0-取消完成
 * @param {number} params.todoId 必填: 
 * @return Promise<OAdminTodoCompletePost>
 */
export const adminTodoCompletePost = async (params?: IAdminTodoCompletePost) => {
	return post<OAdminTodoCompletePost>(`/admin/todo/complete`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 完成/取消完成任务清单 buildFnGetOrPostCode
 * 
 * @param {number} params.status 必填: 1-完成 0-取消完成
 * @param {number} params.todoDetailId 必填: 任务清单ID
 * @return Promise<OAdminTodoDetailCompletePost>
 */
export const adminTodoDetailCompletePost = async (params?: IAdminTodoDetailCompletePost) => {
	return post<OAdminTodoDetailCompletePost>(`/admin/todo/detail/complete`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取任务清单详情 buildFnGetOrPostCode
 * 
 * @param {number} params.todoDetailId 必填: 任务清单ID
 * @return Promise<OAdminTodoDetailInfoGet>
 */
export const adminTodoDetailInfoGet = async (params?: IAdminTodoDetailInfoGet) => {
	return get<OAdminTodoDetailInfoGet>(`/admin/todo/detail/info`,{
		params
	})
}
/**
 * @description 获取任务清单列表 buildFnGetOrPostCode
 * 
 * @param {number} params.todoSubId 必填: 子任务ID
 * @param {number} params.status 可选: 状态 1-已完成 0-未完成
 * @return Promise<OAdminTodoDetailListGet>
 */
export const adminTodoDetailListGet = async (params?: IAdminTodoDetailListGet) => {
	return get<OAdminTodoDetailListGet>(`/admin/todo/detail/list`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 添加任务清单 buildFnGetOrPostCode
 * 
 * @param {string} params.endTime 可选: 结束时间
 * @param {number} params.leaderId 可选: 负责人ID
 * @param {string} params.title 必填: 标题
 * @param {number} params.todoSubId 必填: 子任务ID
 * @return Promise<OAdminTodoDetailPost>
 */
export const adminTodoDetailPost = async (params?: IAdminTodoDetailPost) => {
	return post<OAdminTodoDetailPost>(`/admin/todo/detail`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改任务清单 buildFnGetOrPostCode
 * 
 * @param {string} params.endTime 可选: 结束时间
 * @param {number} params.leaderId 可选: 负责人ID
 * @param {string} params.title 必填: 标题
 * @param {number} params.todoDetailId 必填: 任务清单ID
 * @return Promise<OAdminTodoDetailPut>
 */
export const adminTodoDetailPut = async (params?: IAdminTodoDetailPut) => {
	return put<OAdminTodoDetailPut>(`/admin/todo/detail`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取待办详情 buildFnGetOrPostCode
 * 
 * @param {number} params.todoId 必填: 
 * @return Promise<OAdminTodoInfoGet>
 */
export const adminTodoInfoGet = async (params?: IAdminTodoInfoGet) => {
	return get<OAdminTodoInfoGet>(`/admin/todo/info`,{
		params
	})
}
/**
 * @description 获取负责人列表 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminTodoLeaderListGet>
 */
export const adminTodoLeaderListGet = async (params?: IAdminTodoLeaderListGet) => {
	return get<OAdminTodoLeaderListGet>(`/admin/todo/leader/list`,{
		params
	})
}
/**
 * @description 获取待办列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {string} params.endTime 可选: 
 * @param {number} params.status 可选: 0-未完成 1-已完成
 * @param {string} params.leaderId 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.startTime 可选: 
 * @param {string} params.category 可选: 类别
 * @param {number} params.deptId 可选: 部门ID
 * @return Promise<OAdminTodoListGet>
 */
export const adminTodoListGet = async (params?: IAdminTodoListGet) => {
	return get<OAdminTodoListGet>(`/admin/todo/list`,{
		params
	})
}
/**
 * @description 获取部门列表（左侧拦） buildFnGetOrPostCode
 * 
 * @return Promise<OAdminTodoOwnerDeptListGet>
 */
export const adminTodoOwnerDeptListGet = async (params?: IAdminTodoOwnerDeptListGet) => {
	return get<OAdminTodoOwnerDeptListGet>(`/admin/todo/owner/deptList`,{
		params
	})
}
/**
 * @description 添加待办 buildFnGetOrPostCode
 * 
 * @param {string} params.category 必填: 类别
 * @param {any[]} params.joinIds 可选: 
 * @param {any[]} params.leaderIds 可选: 
 * @param {string} params.title 必填: 
 * @return Promise<OAdminTodoPost>
 */
export const adminTodoPost = async (params?: IAdminTodoPost) => {
	return post<OAdminTodoPost>(`/admin/todo`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改待办 buildFnGetOrPostCode
 * 
 * @param {string} params.category 必填: 类别
 * @param {any[]} params.joinIds 可选: 
 * @param {any[]} params.leaderIds 可选: 
 * @param {string} params.title 必填: 标题
 * @param {number} params.todoId 必填: 
 * @return Promise<OAdminTodoPut>
 */
export const adminTodoPut = async (params?: IAdminTodoPut) => {
	return put<OAdminTodoPut>(`/admin/todo`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 添加回复 buildFnGetOrPostCode
 * 
 * @param {string} params.content 必填: 
 * @param {any[]} params.eitUserIds 可选: @的人 @全部时 值为 *
 * @param {any[]} params.fileList 必填: 
 * @param {number} params.id 必填: 评论/回复ID
 * @return Promise<OAdminTodoReplyPost>
 */
export const adminTodoReplyPost = async (params?: IAdminTodoReplyPost) => {
	return post<OAdminTodoReplyPost>(`/admin/todo/reply`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 完成/取消完成子待办 buildFnGetOrPostCode
 * 
 * @param {number} params.status 必填: 1-完成 0-取消完成
 * @param {number} params.todoSubId 必填: 子待办ID
 * @return Promise<OAdminTodoSubCompletePost>
 */
export const adminTodoSubCompletePost = async (params?: IAdminTodoSubCompletePost) => {
	return post<OAdminTodoSubCompletePost>(`/admin/todo/sub/complete`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取子待办详情 buildFnGetOrPostCode
 * 
 * @param {number} params.todoSubId 必填: 子待办ID
 * @return Promise<OAdminTodoSubDetailGet>
 */
export const adminTodoSubDetailGet = async (params?: IAdminTodoSubDetailGet) => {
	return get<OAdminTodoSubDetailGet>(`/admin/todo/sub/detail`,{
		params
	})
}
/**
 * @description 获取子待办列表 buildFnGetOrPostCode
 * 
 * @param {number} params.todoId 必填: 待办ID
 * @param {number} params.status 可选: 状态 1-已完成 0-未完成
 * @return Promise<OAdminTodoSubListGet>
 */
export const adminTodoSubListGet = async (params?: IAdminTodoSubListGet) => {
	return get<OAdminTodoSubListGet>(`/admin/todo/sub/list`,{
		params
	})
}
/**
 * @description 添加子待办 buildFnGetOrPostCode
 * 
 * @param {string} params.content 可选: 
 * @param {string} params.endTime 可选: 结束时间
 * @param {any[]} params.fileList 可选: 
 * @param {any[]} params.joinIds 可选: 
 * @param {any[]} params.loopValues 可选: 循环任务 周一到周日 0-6 /0-周日
 * @param {string} params.startTime 可选: 开始时间
 * @param {string} params.title 必填: 标题
 * @param {number} params.todoId 必填: 待办ID
 * @return Promise<OAdminTodoSubPost>
 */
export const adminTodoSubPost = async (params?: IAdminTodoSubPost) => {
	return post<OAdminTodoSubPost>(`/admin/todo/sub`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改子待办 buildFnGetOrPostCode
 * 
 * @param {string} params.content 可选: 
 * @param {string} params.endTime 可选: 结束时间
 * @param {any[]} params.fileList 可选: 
 * @param {any[]} params.joinIds 可选: 
 * @param {any[]} params.loopValues 可选: 循环任务 周一到周日 0-6 /0-周日
 * @param {string} params.startTime 可选: 开始时间
 * @param {string} params.title 必填: 标题
 * @param {number} params.todoSubId 必填: 子待办ID
 * @return Promise<OAdminTodoSubPut>
 */
export const adminTodoSubPut = async (params?: IAdminTodoSubPut) => {
	return put<OAdminTodoSubPut>(`/admin/todo/sub`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改密码 buildFnGetOrPostCode
 * 
 * @param {string} params.newPassword 可选: 新密码
 * @param {string} params.oldPassword 可选: 旧密码
 * @return Promise<OAdminUpdatePwdPut>
 */
export const adminUpdatePwdPut = async (params?: IAdminUpdatePwdPut) => {
	return put<OAdminUpdatePwdPut>(`/admin/updatePwd`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询管理员列表 buildFnArrayCode
 * 
 * @param {string} params.beginTime 可选: 开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.endTime 可选: 结束时间 yyyy-MM-dd HH:mm:ss
 * @param {number} params.pageNum 可选: 当前页数
 * @param {number} params.pageSize 可选: 每页数量
 * @param {string} params.phone 可选: 手机号码
 * @param {number} params.status 可选: 账号状态 0-正常 1-停用
 * @param {string} params.userName 可选: 用户名
 * @param {string} params.email 可选: 
 * @param {string} params.roleKey 可选: 
 * @param {number} params.deptId 可选: 部门ID 未知部门填写0
 * @param {string} params.keyword 可选: 搜索查询}
 * @return Promise<OAdminUserListGetItem>
 */
export const adminUserListGet = async (params?: IAdminUserListGet) => {
	return get<OAdminUserListGetItem[]>(`/admin/user/list`, {
		params
	})
}
/**
 * @description 移除员工-从部门里移除 buildFnGetOrPostCode
 * 
 * @param {number} params.deptId 必填: 部门id
 * @param {number} params.userId 必填: 需要更改的用户
 * @return Promise<OAdminUserMoveUserPost>
 */
export const adminUserMoveUserPost = async (params?: IAdminUserMoveUserPost) => {
	return post<OAdminUserMoveUserPost>(`/admin/user/moveUser`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 新增管理员 buildFnGetOrPostCode
 * 
 * @param {string} params.avatar 可选: 图像
 * @param {string} params.city 可选: 归属地
 * @param {number} params.deptId 必填: 部门ID
 * @param {string} params.email 必填: 邮箱
 * @param {number} params.mergePerm 必填: 是否有合并线索权限 0-无 1-有
 * @param {string} params.password 可选: 密码
 * @param {string} params.phone 可选: 手机号码
 * @param {string} params.qrCode 可选: 二维码
 * @param {string} params.remark 可选: 备注
 * @param {any[]} params.roleIdList 可选: 角色id列表列表
 * @param {string} params.roleKey 可选: roleKey
 * @param {number} params.sensitivePerm 必填: 是否有敏感信息权限 0-无 1-有
 * @param {number} params.status 可选: 账号状态 0-正常 1-停用
 * @param {number} params.todoPerm 必填: 是否有权限添加主任务 1-是 0-否
 * @param {number} params.userId 可选: id 新增时不传 修改时必传
 * @param {string} params.userName 可选: 用户名
 * @return Promise<OAdminUserPost>
 */
export const adminUserPost = async (params?: IAdminUserPost) => {
	return post<OAdminUserPost>(`/admin/user`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改管理员基本信息 buildFnGetOrPostCode
 * 
 * @param {string} params.avatar 可选: 图像
 * @param {string} params.qrCode 可选: 二维码
 * @param {number} params.userId 必填: 用户ID
 * @param {string} params.userName 必填: 名称
 * @return Promise<OAdminUserProfilePut>
 */
export const adminUserProfilePut = async (params?: IAdminUserProfilePut) => {
	return put<OAdminUserProfilePut>(`/admin/user/profile`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改管理员 buildFnGetOrPostCode
 * 
 * @param {string} params.avatar 可选: 图像
 * @param {string} params.city 可选: 归属地
 * @param {string} params.email 必填: 邮箱
 * @param {number} params.mergePerm 必填: 是否有合并线索权限 0-无 1-有
 * @param {string} params.password 可选: 密码
 * @param {string} params.phone 可选: 手机号码
 * @param {string} params.qrCode 可选: 二维码
 * @param {string} params.remark 可选: 备注
 * @param {any[]} params.roleIdList 可选: 角色id列表列表
 * @param {string} params.roleKey 可选: roleKey
 * @param {number} params.sensitivePerm 必填: 是否有敏感信息权限 0-无 1-有
 * @param {number} params.status 可选: 账号状态 0-正常 1-停用
 * @param {number} params.todoPerm 必填: 是否有权限添加主任务 1-是 0-否
 * @param {number} params.userId 可选: id 新增时不传 修改时必传
 * @param {string} params.userName 可选: 用户名
 * @return Promise<OAdminUserPut>
 */
export const adminUserPut = async (params?: IAdminUserPut) => {
	return put<OAdminUserPut>(`/admin/user`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 关联老账户到部门 buildFnGetOrPostCode
 * 
 * @param {number} params.deptId 必填: 
 * @param {number} params.userId 必填: 
 * @return Promise<OAdminUserRelevantUserToDeptPost>
 */
export const adminUserRelevantUserToDeptPost = async (params?: IAdminUserRelevantUserToDeptPost) => {
	return post<OAdminUserRelevantUserToDeptPost>(`/admin/user/relevantUserToDept`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 重置密码 buildFnGetOrPostCode
 * 
 * @param {string} params.password 可选: 密码
 * @param {number} params.userId 可选: 用户id
 * @return Promise<OAdminUserResetPwdPut>
 */
export const adminUserResetPwdPut = async (params?: IAdminUserResetPwdPut) => {
	return put<OAdminUserResetPwdPut>(`/admin/user/resetPwd`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取管理员角色key buildFnGetOrPostCode
 * 
 * @return Promise<OAdminUserRolekeyGet>
 */
export const adminUserRolekeyGet = async (params?: IAdminUserRolekeyGet) => {
	return get<OAdminUserRolekeyGet>(`/admin/user/rolekey`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除管理员 buildFnPathCode
 * @path {number userId 必填: }
 * @return Promise<OAdminUserUserIdDelete>
 */
export const adminUserUserIdDelete = async (userId: number) => {
	return del<OAdminUserUserIdDelete>(`/admin/user/${userId}`)
}
/**
 * @description 查询管理员详情 buildFnPathCode
 * @path {number userId 必填: }
 * @return Promise<OAdminUserUserIdGet>
 */
export const adminUserUserIdGet = async (userId: number) => {
	return get<OAdminUserUserIdGet>(`/admin/user/${userId}`)
}
/**
 * @description 企业微信登录-绑定账号 buildFnGetOrPostCode
 * 
 * @param {string} params.email 必填: 邮箱
 * @param {string} params.emailCode 必填: 有效验证码
 * @param {string} params.wtoken 必填: wtoken
 * @return Promise<OAdminWebloginBindPost>
 */
export const adminWebloginBindPost = async (params?: IAdminWebloginBindPost) => {
	return post<OAdminWebloginBindPost>(`/admin/weblogin/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 企业微信登录-绑定账号-发送邮件 buildFnGetOrPostCode
 * 
 * @param {string} params.email 必填: 
 * @return Promise<OAdminWebloginSendEmailPost>
 */
export const adminWebloginSendEmailPost = async (params?: IAdminWebloginSendEmailPost) => {
	return post<OAdminWebloginSendEmailPost>(`/admin/weblogin/sendEmail`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取提现详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OAdminWithdrawIdGet>
 */
export const adminWithdrawIdGet = async (id: number) => {
	return get<OAdminWithdrawIdGet>(`/admin/withdraw/${id}`)
}
/**
 * @description 查询提现列表 buildFnArrayCode
 * 
 * @param {string} params.beginTime 可选: 发起开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.endTime 可选: 发起结束时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.isAsc 可选: 顺序 默认desc
 * @param {number} params.maxAmount 可选: 提现金额最大值
 * @param {number} params.minAmount 可选: 提现金额最小值
 * @param {string} params.operatorEmail 可选: 用户邮箱
 * @param {number} params.operatorId 可选: 用户id
 * @param {string} params.operatorName 可选: 用户名称
 * @param {string} params.operatorNo 可选: 用户编号
 * @param {string} params.operatorPhone 可选: 用户手机
 * @param {string} params.operatorType 可选: 用户角色类型
 * @param {string} params.orderByColumn 可选: 排序字段 默认create_time
 * @param {number} params.pageNum 可选: 当前页数
 * @param {number} params.pageSize 可选: 每页数量
 * @param {number} params.status 可选: 0-提现中 1-成功 2-失败
 * @param {string} params.updateBeginTime 可选: 操作开始时间 yyyy-MM-dd HH:mm:ss
 * @param {number} params.updateById 可选: 操作人id
 * @param {string} params.updateEndTime 可选: 操作结束时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.withdrawNo 可选: 提现编号}
 * @return Promise<OAdminWithdrawListGetItem>
 */
export const adminWithdrawListGet = async (params?: IAdminWithdrawListGet) => {
	return get<OAdminWithdrawListGetItem[]>(`/admin/withdraw/list`, {
		params
	})
}
/**
 * @description 通过审核 buildFnGetOrPostCode
 * 
 * @param {number} params.id 可选: id
 * @param {string} params.remark 可选: 备注
 * @return Promise<OAdminWithdrawPassPost>
 */
export const adminWithdrawPassPost = async (params?: IAdminWithdrawPassPost) => {
	return post<OAdminWithdrawPassPost>(`/admin/withdraw/pass`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 拒绝审核 buildFnGetOrPostCode
 * 
 * @param {number} params.id 可选: id
 * @param {string} params.remark 可选: 备注
 * @return Promise<OAdminWithdrawRejectPost>
 */
export const adminWithdrawRejectPost = async (params?: IAdminWithdrawRejectPost) => {
	return post<OAdminWithdrawRejectPost>(`/admin/withdraw/reject`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 构造企业微信登录链接 buildFnGetOrPostCode
 * 
 * @return Promise<OAdminWwloginUrlGet>
 */
export const adminWwloginUrlGet = async (params?: IAdminWwloginUrlGet) => {
	return get<OAdminWwloginUrlGet>(`/admin/wwlogin/url`,{
		params
	})
}
/**
 * @description 获取旅程消息 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OChannelFollowNotifyRecordGet>
 */
export const channelFollowNotifyRecordGet = async (params?: IChannelFollowNotifyRecordGet) => {
	return get<OChannelFollowNotifyRecordGet>(`/channel/follow/notify/record`,{
		params
	})
}
/**
 * @description 渠道信息 buildFnGetOrPostCode
 * 
 * @return Promise<OChannelInfoGet>
 */
export const channelInfoGet = async (params?: IChannelInfoGet) => {
	return get<OChannelInfoGet>(`/channel/info`,{
		params
	})
}
/**
 * @description 渠道登录 buildFnGetOrPostCode
 * 
 * @param {string} params.loginName 必填: 用户名
 * @param {string} params.password 必填: 密码
 * @return Promise<OChannelLoginPost>
 */
export const channelLoginPost = async (params?: IChannelLoginPost) => {
	return post<OChannelLoginPost>(`/channel/login`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改密码 buildFnGetOrPostCode
 * 
 * @param {string} params.newPassword 必填: 
 * @param {string} params.oldPassword 必填: 
 * @return Promise<OChannelPasswordPost>
 */
export const channelPasswordPost = async (params?: IChannelPasswordPost) => {
	return post<OChannelPasswordPost>(`/channel/password`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取线索详情 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @return Promise<OChannelThreadDetailGet>
 */
export const channelThreadDetailGet = async (params?: IChannelThreadDetailGet) => {
	return get<OChannelThreadDetailGet>(`/channel/thread/detail`,{
		params
	})
}
/**
 * @description 获取旅程列表 buildFnGetOrPostCode
 * 
 * @param {number} params.investorId 必填: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @return Promise<OChannelThreadFollowRecordGet>
 */
export const channelThreadFollowRecordGet = async (params?: IChannelThreadFollowRecordGet) => {
	return get<OChannelThreadFollowRecordGet>(`/channel/thread/follow/record`,{
		params
	})
}
/**
 * @description 获取线索列表 buildFnGetOrPostCode
 * 
 * @param {string} params.keyword 可选: 
 * @param {string} params.city 可选: 
 * @param {string} params.province 可选: 
 * @param {number} params.tranStatus 可选: 0-未签约 1-签约 2-复购 9-退出
 * @param {number} params.customerStatus 可选: 0-未跟进 1-已跟进 9-已释放
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.isConclude 可选: 签约客户查询 固定值：1
 * @return Promise<OChannelThreadListGet>
 */
export const channelThreadListGet = async (params?: IChannelThreadListGet) => {
	return get<OChannelThreadListGet>(`/channel/thread/list`,{
		params
	})
}
/**
 * @description 添加线索 buildFnGetOrPostCode
 * 
 * @param {string} params.city 可选: 城市
 * @param {string} params.email 可选: 邮箱
 * @param {string} params.phone 必填: 手机号
 * @param {string} params.remark 可选: 备注
 * @param {string} params.userName 必填: 用户名
 * @param {string} params.wechat 可选: 微信号
 * @param {string} params.wechatName 可选: 微信昵称
 * @return Promise<OChannelThreadPost>
 */
export const channelThreadPost = async (params?: IChannelThreadPost) => {
	return post<OChannelThreadPost>(`/channel/thread`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 项目详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OCommonProductIdGetItem[]>
 */
export const commonProductIdGet = async (id: number) => {
	return get<OCommonProductIdGetItem[]>(`/common/product/${id}`)
}
/**
 * @description 项目列表 buildFnArrayCode
 * 
 * @param {string} params.name 可选: 产品名称
 * @param {string} params.type 可选: 产品类型
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {string} params.regionCategory 可选: 地区类别 1-农业地区 2-高失业地区 3-基建项目 4-一般地区
 * @param {number} params.law 可选: 法律 1新法 0老法
 * @param {number} params.sellStatus 可选: 售罄状态 0-未售完 1已售完}
 * @return Promise<OCommonProductListGetItem>
 */
export const commonProductListGet = async (params?: ICommonProductListGet) => {
	return get<OCommonProductListGetItem[]>(`/common/product/list`, {
		params
	})
}
/**
 * @description 获取产品相关内容 buildFnGetOrPostCode
 * 
 * @param {number} params.productId 必填: 产品ID
 * @param {string} params.type 可选: news ｜ video ｜ image ｜ file
 * @return Promise<OCommonProductRelevantContentGet>
 */
export const commonProductRelevantContentGet = async (params?: ICommonProductRelevantContentGet) => {
	return get<OCommonProductRelevantContentGet>(`/common/product/relevant/content`,{
		params
	})
}
/**
 * @description 发送手机验证码 buildFnGetOrPostCode
 * 
 * @param {string} params.bizType 必填: 业务类型 目前有 register，login
 * @param {string} params.phone 必填: 手机号码
 * @return Promise<OCommonSendPhoneCodePost>
 */
export const commonSendPhoneCodePost = async (params?: ICommonSendPhoneCodePost) => {
	return post<OCommonSendPhoneCodePost>(`/common/send/phone/code`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 修改图像 buildFnFileCode
 * 
 * @param {file} params.files 可选: 
 * @return Promise<OInvestorAvatarModifyPost>
 */
export const investorAvatarModifyPost = async (params?: IInvestorAvatarModifyPostFormData) => {
	return post<OInvestorAvatarModifyPost>(`/investor/avatar/modify`, {
		params  
	})
}
/**
 * @description 绑定/换绑 银行卡信息 buildFnGetOrPostCode
 * 
 * @param {string} params.bankName 必填: 银行名称
 * @param {string} params.bankNumber 必填: 银行卡
 * @param {string} params.bankUserName 必填: 开户名
 * @return Promise<OInvestorBankAccountBindPost>
 */
export const investorBankAccountBindPost = async (params?: IInvestorBankAccountBindPost) => {
	return post<OInvestorBankAccountBindPost>(`/investor/bank/account/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取银行卡信息 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorBankAccountGet>
 */
export const investorBankAccountGet = async (params?: IInvestorBankAccountGet) => {
	return get<OInvestorBankAccountGet>(`/investor/bank/account`,{
		params
	})
}
/**
 * @description 解绑 银行卡信息 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorBankAccountUnbindPost>
 */
export const investorBankAccountUnbindPost = async (params?: IInvestorBankAccountUnbindPost) => {
	return post<OInvestorBankAccountUnbindPost>(`/investor/bank/account/unbind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 绑定邮箱 buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: 验证码
 * @param {string} params.newEmail 必填: 新邮箱
 * @return Promise<OInvestorBindEmailPost>
 */
export const investorBindEmailPost = async (params?: IInvestorBindEmailPost) => {
	return post<OInvestorBindEmailPost>(`/investor/bindEmail`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 我的顾问 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0-当前 1-历史
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OInvestorBrokerListGet>
 */
export const investorBrokerListGet = async (params?: IInvestorBrokerListGet) => {
	return get<OInvestorBrokerListGet>(`/investor/broker/list`,{
		params
	})
}
/**
 * @description 选择合格投资者regs/regd buildFnGetOrPostCode
 * 
 * @param {number} params.type 必填: 投资者身份，1-Reg S，2-Reg D
 * @return Promise<OInvestorChooseIdentityPost>
 */
export const investorChooseIdentityPost = async (params?: IInvestorChooseIdentityPost) => {
	return post<OInvestorChooseIdentityPost>(`/investor/chooseIdentity`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 删除收藏 buildFnPathCode
 * @path {string collectionNo 必填: }
 * @return Promise<OInvestorCollectionCollectionNoDelete>
 */
export const investorCollectionCollectionNoDelete = async (collectionNo: string) => {
	return del<OInvestorCollectionCollectionNoDelete>(`/investor/collection/${collectionNo}`)
}
/**
 * @description 收藏列表-直播 buildFnGetOrPostCode
 * 
 * @param {string} params.type 可选: PROJECT:项目 LIVE:直播 NEWS:新闻
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorCollectionLiveGet>
 */
export const investorCollectionLiveGet = async (params?: IInvestorCollectionLiveGet) => {
	return get<OInvestorCollectionLiveGet>(`/investor/collection/live`,{
		params
	})
}
/**
 * @description 收藏列表-新闻 buildFnGetOrPostCode
 * 
 * @param {string} params.type 可选: PROJECT:项目 LIVE:直播 NEWS:新闻
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorCollectionNewsGet>
 */
export const investorCollectionNewsGet = async (params?: IInvestorCollectionNewsGet) => {
	return get<OInvestorCollectionNewsGet>(`/investor/collection/news`,{
		params
	})
}
/**
 * @description 新增收藏 buildFnGetOrPostCode
 * 
 * @param {number} params.objId 可选: 对象ID
 * @param {string} params.objType 可选: 对象类型 PROJECT:项目  LIVE:直播  NEWS:文章
 * @return Promise<OInvestorCollectionPost>
 */
export const investorCollectionPost = async (params?: IInvestorCollectionPost) => {
	return post<OInvestorCollectionPost>(`/investor/collection`,{
		params
	})
}
/**
 * @description 收藏列表-项目 buildFnGetOrPostCode
 * 
 * @param {string} params.type 可选: PROJECT:项目 LIVE:直播 NEWS:新闻
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorCollectionProjectGet>
 */
export const investorCollectionProjectGet = async (params?: IInvestorCollectionProjectGet) => {
	return get<OInvestorCollectionProjectGet>(`/investor/collection/project`,{
		params
	})
}
/**
 * @description 我的文案 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0-当前 1-历史
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OInvestorCopywritingListGet>
 */
export const investorCopywritingListGet = async (params?: IInvestorCopywritingListGet) => {
	return get<OInvestorCopywritingListGet>(`/investor/copywriting/list`,{
		params
	})
}
/**
 * @description 我的优惠券 buildFnGetOrPostCode
 * 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {string} params.category 可选: 类别 PLATFORM:平台 OTHER:其他
 * @param {number} params.couponType 可选: 类型 0-预定费 1-咨询费 2-律师费
 * @return Promise<OInvestorCouponGet>
 */
export const investorCouponGet = async (params?: IInvestorCouponGet) => {
	return get<OInvestorCouponGet>(`/investor/coupon`,{
		params
	})
}
/**
 * @description 领取转让的优惠券 buildFnGetOrPostCode
 * 
 * @param {number} params.transferNo 必填: 
 * @return Promise<OInvestorCouponReceivePost>
 */
export const investorCouponReceivePost = async (params?: IInvestorCouponReceivePost) => {
	return post<OInvestorCouponReceivePost>(`/investor/coupon/receive`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取转让优惠券 buildFnGetOrPostCode
 * 
 * @param {string} params.transferNo 可选: 转让编号
 * @return Promise<OInvestorCouponTransferGet>
 */
export const investorCouponTransferGet = async (params?: IInvestorCouponTransferGet) => {
	return get<OInvestorCouponTransferGet>(`/investor/coupon/transfer`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取我的转让列表 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorCouponTransferListGet>
 */
export const investorCouponTransferListGet = async (params?: IInvestorCouponTransferListGet) => {
	return get<OInvestorCouponTransferListGet>(`/investor/coupon/transfer/list`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 优惠券转让 buildFnGetOrPostCode
 * 
 * @param {number} params.invCouponId 必填: 
 * @return Promise<OInvestorCouponTransferPost>
 */
export const investorCouponTransferPost = async (params?: IInvestorCouponTransferPost) => {
	return post<OInvestorCouponTransferPost>(`/investor/coupon/transfer`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 我的客服 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0-当前 1-历史
 * @param {number} params.orderId 可选: 订单ID
 * @return Promise<OInvestorCustomerListGet>
 */
export const investorCustomerListGet = async (params?: IInvestorCustomerListGet) => {
	return get<OInvestorCustomerListGet>(`/investor/customer/list`,{
		params
	})
}
/**
 * @description EB-5基金 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorEb5fundListGet>
 */
export const investorEb5fundListGet = async (params?: IInvestorEb5fundListGet) => {
	return get<OInvestorEb5fundListGet>(`/investor/eb5fund/list`,{
		params
	})
}
/**
 * @description 绑定邮箱-发送验证邮件 buildFnGetOrPostCode
 * 
 * @param {string} params.email 必填: 邮箱
 * @return Promise<OInvestorEmailBindPost>
 */
export const investorEmailBindPost = async (params?: IInvestorEmailBindPost) => {
	return post<OInvestorEmailBindPost>(`/investor/email/bind`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 解绑邮箱-发送验证邮件 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorEmailUnbindPost>
 */
export const investorEmailUnbindPost = async (params?: IInvestorEmailUnbindPost) => {
	return post<OInvestorEmailUnbindPost>(`/investor/email/unbind`,{
		params
	})
}
/**
 * @description 文件列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.componentId 可选: 组件ID
 * @param {number} params.orderSubId 可选: 子订单ID
 * @param {number} params.orderId 可选: 订单ID
 * @return Promise<OInvestorFileListGet>
 */
export const investorFileListGet = async (params?: IInvestorFileListGet) => {
	return get<OInvestorFileListGet>(`/investor/file/list`,{
		params
	})
}
/**
 * @description 历史文件 buildFnGetOrPostCode
 * 
 * @param {number} params.orderSubId 可选: 子订单ID
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorHistoryFileListGet>
 */
export const investorHistoryFileListGet = async (params?: IInvestorHistoryFileListGet) => {
	return get<OInvestorHistoryFileListGet>(`/investor/history/file/list`,{
		params
	})
}
/**
 * @description 邀请码信息 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorInvitationInfoGet>
 */
export const investorInvitationInfoGet = async (params?: IInvestorInvitationInfoGet) => {
	return get<OInvestorInvitationInfoGet>(`/investor/invitation/info`,{
		params
	})
}
/**
 * @description 邀请记录 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorInvitationListGet>
 */
export const investorInvitationListGet = async (params?: IInvestorInvitationListGet) => {
	return get<OInvestorInvitationListGet>(`/investor/invitation/list`,{
		params
	})
}
/**
 * @description 邀请记录订单列表 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.hisId 可选: 
 * @return Promise<OInvestorInvitationOrderListGet>
 */
export const investorInvitationOrderListGet = async (params?: IInvestorInvitationOrderListGet) => {
	return get<OInvestorInvitationOrderListGet>(`/investor/invitation/order/list`,{
		params
	})
}
/**
 * @description 我的律师 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0-当前 1-历史
 * @param {number} params.orderId 可选: 订单ID
 * @return Promise<OInvestorLawyerListGet>
 */
export const investorLawyerListGet = async (params?: IInvestorLawyerListGet) => {
	return get<OInvestorLawyerListGet>(`/investor/lawyer/list`,{
		params
	})
}
/**
 * @description 修改密码 buildFnGetOrPostCode
 * 
 * @param {string} params.newPassword 可选: 新密码
 * @param {string} params.oldPassword 可选: 旧密码
 * @return Promise<OInvestorModifyPasswordPost>
 */
export const investorModifyPasswordPost = async (params?: IInvestorModifyPasswordPost) => {
	return post<OInvestorModifyPasswordPost>(`/investor/modifyPassword`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 消息列表 buildFnGetOrPostCode
 * 
 * @param {string} params.category 可选: SUBSCRIBE:订阅  SYSTEM:系统消息
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorNotificationGet>
 */
export const investorNotificationGet = async (params?: IInvestorNotificationGet) => {
	return get<OInvestorNotificationGet>(`/investor/notification`,{
		params
	})
}
/**
 * @description 消息详情 buildFnPathCode
 * @path {number id 必填: }
 * @return Promise<OInvestorNotificationIdGet>
 */
export const investorNotificationIdGet = async (id: number) => {
	return get<OInvestorNotificationIdGet>(`/investor/notification/${id}`)
}
/**
 * @description 标记已读 buildFnGetOrPostCode
 * 
 * @param {any[]} params.ids 必填: 
 * @return Promise<OInvestorNotificationReadPost>
 */
export const investorNotificationReadPost = async (params?: IInvestorNotificationReadPost) => {
	return post<OInvestorNotificationReadPost>(`/investor/notification/read`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取未读数 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorNotificationUnreadCountGet>
 */
export const investorNotificationUnreadCountGet = async (params?: IInvestorNotificationUnreadCountGet) => {
	return get<OInvestorNotificationUnreadCountGet>(`/investor/notification/unread/count`,{
		params
	})
}
/**
 * @description 取消订单 buildFnGetOrPostCode
 * 
 * @param {number} params.orderId 必填: 订单ID
 * @return Promise<OInvestorOrderCancelPost>
 */
export const investorOrderCancelPost = async (params?: IInvestorOrderCancelPost) => {
	return post<OInvestorOrderCancelPost>(`/investor/order/cancel`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 创建订单 buildFnGetOrPostCode
 * 
 * @param {string} params.productType 必填: 类型 EB-5
 * @return Promise<OInvestorOrderCreatePost>
 */
export const investorOrderCreatePost = async (params?: IInvestorOrderCreatePost) => {
	return post<OInvestorOrderCreatePost>(`/investor/order/create`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 订单列表 buildFnArrayCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.orderStatus 可选: 订单状态 0-进行中 1-已完成 100-已取消}
 * @return Promise<OInvestorOrderListGetItem>
 */
export const investorOrderListGet = async (params?: IInvestorOrderListGet) => {
	return get<OInvestorOrderListGetItem[]>(`/investor/order/list`, {
		params
	})
}
/**
 * @description 查询订单操作记录 buildFnGetOrPostCode
 * 
 * @param {number} params.objId 可选: 对象ID
 * @param {string} params.objType 可选: 对象类型
 * @param {number} params.componentId 可选: 组件ID
 * @param {number} params.phaseChildId 可选: 步骤ID
 * @param {number} params.phaseId 可选: 阶段ID
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.orderId 可选: 订单ID
 * @return Promise<OInvestorOrderOperRecordGet>
 */
export const investorOrderOperRecordGet = async (params?: IInvestorOrderOperRecordGet) => {
	return get<OInvestorOrderOperRecordGet>(`/investor/order/oper/record`,{
		params
	})
}
/**
 * @description 订单详情 buildFnPathCode
 * @path {number orderId 必填: }
 * @return Promise<OInvestorOrderOrderIdGet>
 */
export const investorOrderOrderIdGet = async (orderId: number) => {
	return get<OInvestorOrderOrderIdGet>(`/investor/order/${orderId}`)
}
/**
 * @description 查询我的预约 buildFnGetOrPostCode
 * 
 * @param {string} params.productType 可选: 产品类型 ['EB-5','EB-1A','NIW'];
 * @return Promise<OInvestorOrderReserveGet>
 */
export const investorOrderReserveGet = async (params?: IInvestorOrderReserveGet) => {
	return get<OInvestorOrderReserveGet>(`/investor/order/reserve`,{
		params
	})
}
/**
 * @description 预约项目订单 buildFnGetOrPostCode
 * 
 * @param {string} params.productType 必填: 产品类型
 * @return Promise<OInvestorOrderReservePost>
 */
export const investorOrderReservePost = async (params?: IInvestorOrderReservePost) => {
	return post<OInvestorOrderReservePost>(`/investor/order/reserve`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 签署回调 buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: 
 * @param {any[]} params.componentList 必填: 签署组件列表
 * @param {string} params.signNo 必填: 
 * @return Promise<OInvestorOrderSignCallbackPost>
 */
export const investorOrderSignCallbackPost = async (params?: IInvestorOrderSignCallbackPost) => {
	return post<OInvestorOrderSignCallbackPost>(`/investor/order/sign/callback`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询子订单状态 buildFnPathCode
 * @path {number orderSubId 必填: }
 * @return Promise<OInvestorOrderStatusOrderSubIdGet>
 */
export const investorOrderStatusOrderSubIdGet = async (orderSubId: number) => {
	return get<OInvestorOrderStatusOrderSubIdGet>(`/investor/order/status/${orderSubId}`)
}
/**
 * @description 完成订单步骤 buildFnGetOrPostCode
 * 
 * @param {number} params.componentId 必填: 组件ID
 * @param {number} params.orderId 必填: 订单ID
 * @param {number} params.orderSubId 必填: 子订单ID
 * @param {any} params.valueObject 必填: 
 * @return Promise<OInvestorOrderStepPut>
 */
export const investorOrderStepPut = async (params?: IInvestorOrderStepPut) => {
	return put<OInvestorOrderStepPut>(`/investor/order/step`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 申请产品相关内容查看权限 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 内容ID
 * @return Promise<OInvestorProductRelevantPermsPost>
 */
export const investorProductRelevantPermsPost = async (params?: IInvestorProductRelevantPermsPost) => {
	return post<OInvestorProductRelevantPermsPost>(`/investor/product/relevant/perms`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取个人资料 buildFnGetOrPostCode
 * 
 * @return Promise<OInvestorProfileDetailGet>
 */
export const investorProfileDetailGet = async (params?: IInvestorProfileDetailGet) => {
	return get<OInvestorProfileDetailGet>(`/investor/profile/detail`,{
		params
	})
}
/**
 * @description 修改个人资料 buildFnGetOrPostCode
 * 
 * @param {string} params.birthday 必填: 出生日期
 * @param {string} params.city 可选: 城市
 * @param {string} params.country 必填: 国家
 * @param {string} params.currentAddress 可选: 当前地址
 * @param {string} params.firstName 必填: 名 微信返回的nickname保存至此字段
 * @param {number} params.gender 可选: 0:male;1:female,2:unknown
 * @param {string} params.lastName 必填: 姓
 * @param {string} params.phoneNumber 必填: 手机号
 * @param {string} params.province 必填: 洲/省
 * @param {string} params.zipCode 可选: 邮政编码
 * @return Promise<OInvestorProfileModifyPost>
 */
export const investorProfileModifyPost = async (params?: IInvestorProfileModifyPost) => {
	return post<OInvestorProfileModifyPost>(`/investor/profile/modify`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 添加新印章 buildFnGetOrPostCode
 * 
 * @param {string} params.holder 可选: 印章所有人
 * @param {string} params.imgUrl 可选: 印章图片url
 * @return Promise<OInvestorSealCreatePost>
 */
export const investorSealCreatePost = async (params?: IInvestorSealCreatePost) => {
	return post<OInvestorSealCreatePost>(`/investor/seal/create`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 获取印章列表 buildFnArrayCode
 * 
 * @return Promise<OInvestorSealListGetItem>
 */
export const investorSealListGet = async (params?: IInvestorSealListGet) => {
	return get<OInvestorSealListGetItem[]>(`/investor/seal/list`, {
		params
	})
}
/**
 * @description 查看印章 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 印章id
 * @return Promise<OInvestorSealRecordInfoPost>
 */
export const investorSealRecordInfoPost = async (params?: IInvestorSealRecordInfoPost) => {
	return post<OInvestorSealRecordInfoPost>(`/investor/seal/record/info`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 吊销印章 buildFnGetOrPostCode
 * 
 * @param {number} params.id 必填: 印章id
 * @return Promise<OInvestorSealRecordWithdrawPost>
 */
export const investorSealRecordWithdrawPost = async (params?: IInvestorSealRecordWithdrawPost) => {
	return post<OInvestorSealRecordWithdrawPost>(`/investor/seal/record/withdraw`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 我的服务 buildFnGetOrPostCode
 * 
 * @param {number} params.status 可选: 状态 0-当前 1-历史
 * @param {number} params.orderId 可选: 订单id
 * @return Promise<OInvestorServiceListGet>
 */
export const investorServiceListGet = async (params?: IInvestorServiceListGet) => {
	return get<OInvestorServiceListGet>(`/investor/service/list`,{
		params
	})
}
/**
 * @description 订阅数据 buildFnArrayCode
 * 
 * @return Promise<OInvestorSubscribeInfoGetItem>
 */
export const investorSubscribeInfoGet = async (params?: IInvestorSubscribeInfoGet) => {
	return get<OInvestorSubscribeInfoGetItem[]>(`/investor/subscribe/info`, {
		params
	})
}
/**
 * @description 订阅 buildFnGetOrPostCode
 * 
 * @param {string} params.subscribeNode 必填: 订阅节点 （订阅数据里的nodeKey）
 * @return Promise<OInvestorSubscribePost>
 */
export const investorSubscribePost = async (params?: IInvestorSubscribePost) => {
	return post<OInvestorSubscribePost>(`/investor/subscribe`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 查询待办列表 buildFnGetOrPostCode
 * 
 * @param {string} params.title 可选: 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorTodoListGet>
 */
export const investorTodoListGet = async (params?: IInvestorTodoListGet) => {
	return get<OInvestorTodoListGet>(`/investor/todo/list`,{
		params
	})
}
/**
 * @description 解绑邮箱,需先关闭2FA buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: 验证码
 * @return Promise<OInvestorUnbindEmailPost>
 */
export const investorUnbindEmailPost = async (params?: IInvestorUnbindEmailPost) => {
	return post<OInvestorUnbindEmailPost>(`/investor/unbindEmail`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 取消订阅 buildFnGetOrPostCode
 * 
 * @param {string} params.subscribeNode 必填: 
 * @return Promise<OInvestorUnsubscribePost>
 */
export const investorUnsubscribePost = async (params?: IInvestorUnsubscribePost) => {
	return post<OInvestorUnsubscribePost>(`/investor/unsubscribe`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 投资记录 buildFnArrayCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.orderId 可选: 订单ID}
 * @return Promise<OInvestorWalletDepositListGetItem>
 */
export const investorWalletDepositListGet = async (params?: IInvestorWalletDepositListGet) => {
	return get<OInvestorWalletDepositListGetItem[]>(`/investor/wallet/deposit/list`, {
		params
	})
}
/**
 * @description 钱包详情 buildFnArrayCode
 * 
 * @param {number} params.orderId 可选: 订单ID}
 * @return Promise<OInvestorWalletInfoGetItem>
 */
export const investorWalletInfoGet = async (params?: IInvestorWalletInfoGet) => {
	return get<OInvestorWalletInfoGetItem[]>(`/investor/wallet/info`, {
		params
	})
}
/**
 * @description 订单支付记录 buildFnArrayCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @param {number} params.orderId 可选: 订单ID}
 * @return Promise<OInvestorWalletOrderpayListGetItem>
 */
export const investorWalletOrderpayListGet = async (params?: IInvestorWalletOrderpayListGet) => {
	return get<OInvestorWalletOrderpayListGetItem[]>(`/investor/wallet/orderpay/list`, {
		params
	})
}
/**
 * @description 反俑记录 buildFnGetOrPostCode
 * 
 * @param {number} params.pageNum 可选: 
 * @param {number} params.pageSize 可选: 
 * @return Promise<OInvestorWalletRebateListGet>
 */
export const investorWalletRebateListGet = async (params?: IInvestorWalletRebateListGet) => {
	return get<OInvestorWalletRebateListGet>(`/investor/wallet/rebate/list`,{
		params
	})
}
/**
 * @description 获取对公账户 buildFnGetOrPostCode
 * 
 * @return Promise<OPublishCorporateAccountGet>
 */
export const publishCorporateAccountGet = async (params?: IPublishCorporateAccountGet) => {
	return get<OPublishCorporateAccountGet>(`/publish/corporate/account`,{
		params
	})
}
/**
 * @description 通过父id获取下级列表 buildFnPathCode
 * @path {number parentId 必填: }
 * @return Promise<OPublishCountryChildrenParentIdGetItem[]>
 */
export const publishCountryChildrenParentIdGet = async (parentId: number) => {
	return get<OPublishCountryChildrenParentIdGetItem[]>(`/publish/country/children/${parentId}`)
}
/**
 * @description 获取所有国家 buildFnArrayCode
 * 
 * @param {string} params.chName 可选: 中文名称}
 * @return Promise<OPublishCountryListGetItem>
 */
export const publishCountryListGet = async (params?: IPublishCountryListGet) => {
	return get<OPublishCountryListGetItem[]>(`/publish/country/list`, {
		params
	})
}
/**
 * @description 上传文件-私有 buildFnFileCode
 * 
 * @param {file} params.files 必填: 
 * @return Promise<OPublishFilePrivateUploadPost>
 */
export const publishFilePrivateUploadPost = async (params?: IPublishFilePrivateUploadPostFormData) => {
	return post<OPublishFilePrivateUploadPost>(`/publish/file/private/upload`, {
		params  
	})
}
/**
 * @description 获取私有文件签名地址 buildFnGetOrPostCode
 * 
 * @param {string} params.url 必填: oss图片地址
 * @return Promise<OPublishFileSignatureUrlGet>
 */
export const publishFileSignatureUrlGet = async (params?: IPublishFileSignatureUrlGet) => {
	return get<OPublishFileSignatureUrlGet>(`/publish/file/signatureUrl`,{
		params
	})
}
/**
 * @description 上传文件-公共 buildFnFileCode
 * 
 * @param {file} params.files 必填: 
 * @return Promise<OPublishFileUploadPost>
 */
export const publishFileUploadPost = async (params?: IPublishFileUploadPostFormData) => {
	return post<OPublishFileUploadPost>(`/publish/file/upload`, {
		params  
	})
}
/**
 * @description 获取邀请规则 buildFnGetOrPostCode
 * 
 * @return Promise<OPublishInvitationRuleGet>
 */
export const publishInvitationRuleGet = async (params?: IPublishInvitationRuleGet) => {
	return get<OPublishInvitationRuleGet>(`/publish/invitation/rule`,{
		params
	})
}
/**
 * @description 忘记密码-发送重置密码链接邮件 buildFnGetOrPostCode
 * 
 * @param {string} params.email 必填: 邮箱
 * @return Promise<OTouristEmailForgetPasswordSendPost>
 */
export const touristEmailForgetPasswordSendPost = async (params?: ITouristEmailForgetPasswordSendPost) => {
	return post<OTouristEmailForgetPasswordSendPost>(`/tourist/email/forgetPasswordSend`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 注册-发送邮箱验证码 buildFnGetOrPostCode
 * 
 * @param {string} params.email 必填: 邮箱
 * @return Promise<OTouristEmailRegisterCodePost>
 */
export const touristEmailRegisterCodePost = async (params?: ITouristEmailRegisterCodePost) => {
	return post<OTouristEmailRegisterCodePost>(`/tourist/email/registerCode`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 重置密码 buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: code
 * @param {string} params.password 必填: 新密码
 * @return Promise<OTouristForgetPasswordPost>
 */
export const touristForgetPasswordPost = async (params?: ITouristForgetPasswordPost) => {
	return post<OTouristForgetPasswordPost>(`/tourist/forgetPassword`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 登录-手机 buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: 验证码
 * @param {string} params.phone 必填: 手机号
 * @param {string} params.uuid 必填: 验证码token
 * @return Promise<OTouristLoginPhonePost>
 */
export const touristLoginPhonePost = async (params?: ITouristLoginPhonePost) => {
	return post<OTouristLoginPhonePost>(`/tourist/login/phone`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 登录 buildFnGetOrPostCode
 * 
 * @param {string} params.email 必填: 邮箱
 * @param {string} params.googleCode 可选: 谷歌验证码；绑定并开启时需要传。
 * @param {string} params.password 必填: 密码
 * @return Promise<OTouristLoginPost>
 */
export const touristLoginPost = async (params?: ITouristLoginPost) => {
	return post<OTouristLoginPost>(`/tourist/login`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 注册-手机 buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: 验证码
 * @param {string} params.invitationNo 可选: 邀请链接no
 * @param {string} params.password 必填: 登录密码
 * @param {string} params.phone 必填: 手机号
 * @param {string} params.uuid 必填: 验证码token
 * @return Promise<OTouristRegisterPhonePost>
 */
export const touristRegisterPhonePost = async (params?: ITouristRegisterPhonePost) => {
	return post<OTouristRegisterPhonePost>(`/tourist/register/phone`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 注册 buildFnGetOrPostCode
 * 
 * @param {string} params.code 必填: 验证码
 * @param {string} params.email 必填: 邮箱
 * @param {string} params.invitationNo 可选: 邀请链接no
 * @param {string} params.password 必填: 登录密码
 * @return Promise<OTouristRegisterPost>
 */
export const touristRegisterPost = async (params?: ITouristRegisterPost) => {
	return post<OTouristRegisterPost>(`/tourist/register`,{
		params,
		headers: { 'Content-Type': 'application/json'}
	})
}
/**
 * @description 注册企业微信客户端第三方应用鉴权信息 buildFnGetOrPostCode
 * 
 * @param {string} params.url 必填: 
 * @param {string} params.appType 可选: 任务中心应用 传固定值 todo
 * @return Promise<OWechatAgentSignatureConfigGet>
 */
export const wechatAgentSignatureConfigGet = async (params?: IWechatAgentSignatureConfigGet) => {
	return get<OWechatAgentSignatureConfigGet>(`/wechat/agentSignature/config`,{
		params
	})
}
/**
 * @description 注册企业微信客户端js接口鉴权信息 buildFnGetOrPostCode
 * 
 * @param {string} params.url 必填: 
 * @param {string} params.appType 可选: 任务中心应用 传固定值 todo
 * @return Promise<OWechatJsSignatureConfigGet>
 */
export const wechatJsSignatureConfigGet = async (params?: IWechatJsSignatureConfigGet) => {
	return get<OWechatJsSignatureConfigGet>(`/wechat/jsSignature/config`,{
		params
	})
}
/**
 * @description 企业微信构造网页授权链接回调地址 获取用户敏感信息 需要客户端授权操作（可静默） buildFnGetOrPostCode
 * 
 * @param {string} params.page 可选: 跳转页面路径 如 user.html
 * @param {string} params.appType 可选: 任务中心应用 传固定值 todo
 * @return Promise<OWechatOauth2AuthorizeGet>
 */
export const wechatOauth2AuthorizeGet = async (params?: IWechatOauth2AuthorizeGet) => {
	return get<OWechatOauth2AuthorizeGet>(`/wechat/oauth2/authorize`,{
		params
	})
}
    