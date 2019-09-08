export interface ConfigData {
    label: string;
    type: string;
    enable?: string | boolean;
    dataModelRef: string
  }

export interface Types{
  configTypes: string[];
}

export interface DataModelValues{
  dataModelValues: (string | boolean)[];
}