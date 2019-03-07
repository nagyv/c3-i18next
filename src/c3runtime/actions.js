"use strict";
{
    C3.Plugins.Fontanus_I18Next.Acts = {
        Init(language, resources) {
            resources = JSON.parse(resources)
            this.init(language, resources)
        },
        changeLanguage(language) {
            this.changeLanguage(language)
        }
    };
}