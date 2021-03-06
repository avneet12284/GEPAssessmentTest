import { ConfigData } from "../models/ConfigData";

export const config: ConfigData[] = [
                {   label: "field1",
                    type: "textfield",
                    enable: "enableDocumentName",
                    dataModelRef: "documentName"
                },
                {
                    label: "field2",
                    type: "textfield",
                    enable: "enableDocumentNumber",
                    dataModelRef: "documentNumber"
                },
                {
                    label: "field3",
                    type: "textfield",
                    enable: true,
                    dataModelRef: "documentOwner"
                },        
                {
                    label: "field4",
                    type: "checkbox",
                    dataModelRef: "enableDocumentName"
                },
                {
                    label: "field5",
                    type: "checkbox",
                    dataModelRef: "enableDocumentNumber"
                }
            ] ;

    
    
   