"use strict";
{
    C3.Plugins.Fontanus_I18Next.Exps = {
        t(key, options)
        {
            return this.t(key, options ? JSON.parse(options) : null);
        }
    };
}