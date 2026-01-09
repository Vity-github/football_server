class LocaleItem {
  zhCN: string;
  enUS: string;
  constructor(zhCN: string, enUS: string) {
    this.zhCN = zhCN;
    this.enUS = enUS;
  }
}
const locale = {
  COMMON: {
    OPERATION_SUCCESS: new LocaleItem('操作成功', 'Operation successful'),
    OPERATION_FAILED: new LocaleItem('操作失败', 'Operation failed'),
    MISSING_PARAMETERS: new LocaleItem('缺失参数', 'Missing parameters'),
  },
  AUTH: {
    ACCOUNT_REQUIRED: new LocaleItem('账号不能为空', 'Account is required'),
    PASSWORD_REQUIRED: new LocaleItem('密码不能为空', 'Password is required'),
  },
};
const t = (localeItem: LocaleItem): string => {
  return localeItem.zhCN;
};

export { t, locale };
