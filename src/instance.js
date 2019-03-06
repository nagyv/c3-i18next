"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.Fontanus_I18Next;

    PLUGIN_CLASS.Instance = class C3I18NextInstance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
            this.i18 = null
        }

        init(language, resources) {
            this.i18 = i18next.init({
                debug: true,
                lgn: language,
                resources: {
                    [language]: resources
                }
            }).then(t => {
                this.Trigger(C3.Plugins.Fontanus_I18Next.Cnds.initialized)
            })
        }

        t(key) {
            return this.i18.t(key)
        }

        Release()
        {}

        OnCreate()
        {}

        OnPropertyChanged(id, value)
        {}

        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}