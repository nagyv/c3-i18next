"use strict";
{
    C3.Plugins.Fontanus_I18Next.Instance = class C3I18NextInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);
        }

        init(language, resources) {
            i18next.init({
                lng: language,
                resources: resources,
                debug: this._runtime.IsPreview()
            }).then(t => {
                this.Trigger(C3.Plugins.Fontanus_I18Next.Cnds.initialized)
            })
        }

        changeLanguage(language) {
            i18next.changeLanguage(language).then(t => {
                this.Trigger(C3.Plugins.Fontanus_I18Next.Cnds.initialized)
            })
        }

        t(key, options) {
            if(!i18next.isInitialized) {
                console.warn('i18next is not initialized')
                return ''
            }

            return i18next.t(key, options)
        }

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }
    };
}