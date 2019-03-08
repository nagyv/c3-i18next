"use strict";
{

    const PLUGIN_ID = "Fontanus_I18Next";
    const PLUGIN_VERSION = "0.1.1.0";
    const PLUGIN_CATEGORY = "general";

    const PLUGIN_CLASS = SDK.Plugins.Fontanus_I18Next = class C3I18NextPlugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Viktor Nagy");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsSingleGlobal(true);

            this._info.SetSupportedRuntimes(["c3"]);

            this._info.AddFileDependency(
            {
                filename: "i18next.min.js",
                type: "external-script"
            });
            
            SDK.Lang.PushContext(".properties");

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}