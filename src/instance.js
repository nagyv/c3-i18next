"use strict";
{
    const PLUGIN_CLASS = SDK.Plugins.Fontanus_I18Next;

    PLUGIN_CLASS.Instance = class C3I18NextInstance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
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