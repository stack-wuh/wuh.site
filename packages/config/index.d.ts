interface IConfig {
  /**
   * @NOTE 网站名称
   */
  name: string,
  /**
   * @NOTE 说明文案
   */
  description: string,
  /**
   * @NOTE 文档Footer位置配置
   */
  footer: {
    /**
     * @NOTE 焦点
     */
    tip: string,
    /**
     * @NOTE 内部标题
     */
    title: string,
    /**
     * @NOTE 工信部备案
     */
    MIIT: string,
    /**
     * @NOTE 公安部备案
     */
    MoPSF: string,
    /**
     * @NOTE 版权所属
     */
    copyright: string
  }
}

export declare const config: IConfig