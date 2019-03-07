"use strict";
{
    C3.Plugins.Fontanus_I18Next.Exps = {
        t(key, options)
        {
            options = options.length > 0 ? JSON.parse(options) : {}
            return this.t(key, options);
        }
    };
}