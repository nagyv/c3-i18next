"use strict";
{

    const PLUGIN_ID = "Fontanus_I18Next";
    const PLUGIN_VERSION = "0.1.1.1";
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
            this._info.SetAuthor("Mikal");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsSingleGlobal(true);

            this._info.SetSupportedRuntimes(["c3"]);

            this._info.AddFileDependency(
            {
                filename: "c3runtime/gamesparks.js",
                type: "inline-script"
            });
            this._info.AddFileDependency(
            {
                filename: "c3runtime/gamesparks-functions.js",
                type: "inline-script"
            });
            this._info.AddFileDependency(
            {
                filename: "c3runtime/hmac-sha256.js",
                type: "inline-script"
            });

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("text", "apiKey", "value"),
                new SDK.PluginProperty("text", "apiSecret", "value")

            ]);

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}