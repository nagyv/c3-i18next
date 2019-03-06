"use strict";
{
    C3.Plugins.Fontanus_I18Next.Instance = class C3I18NextInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);

            this.gamesparks = new GameSparks();

            this._apiKeyGS = 0;
            this._apiSecretGS = 0;

            if (properties)
            {
                this._apiKeyGS = properties[0];
                var apiSecretGS = properties[1];
            }
            else
            {
                console.log("***DEBUG*** GameSparksMinmal: Properties Null")
            }

            var runtime = this._runtime;
            var currInstance = this;
            var gamesparks = this.gamesparks;
            var myC3 = C3;

            this._lastMessageGS = "";
            this._lastResponseGS = "";

            this.onNonceGS = function(nonce)
            {
                return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(nonce, apiSecretGS));
            }

            ////////////////////////////////
            //// C3Memory
            this.C3Memory = {
                LastMessageGS: "", // Last GameSparks Message
                LastResponseGS: "" // Last GameSparks Response
            }

            const self = this;
            const Conditions = C3.Plugins.Fontanus_I18Next.Cnds;

            ////////////////////////////////
            //// C3Triggers
            this.C3Trigger = {

                oninit: function()
                {
                    self.Call(Conditions.oninit);
                },
                onresponse: function()
                {
                    self.Call(Conditions.onresponse);
                },
                onmessage: function()
                {
                    self.Call(Conditions.onmessage);
                }

            };

            ////////////////////////////////
            //// CallFunction
            //// .... Call Trigger
            this.Call = function(_path)
            {
                const trigger = _path;

                self.Trigger(trigger);
            };

            this.onInitGS = function()
            {
                currInstance.C3Trigger.oninit();
            }

            this.onMessageGS = function(message)
            {
                currInstance._lastMessageGS = JSON.stringify(message);
                // console.log("***DEBUG*** onMessageGS: "+currInstance._lastMessageGS);

                currInstance.C3Trigger.onmessage();
            }

            this.onResponseGS = function(response)
            {
                currInstance._lastResponseGS = JSON.stringify(response);
                // console.log("***DEBUG*** onResponseGS: "+currInstance._lastResponseGS);

                currInstance.C3Trigger.onresponse();
            }

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