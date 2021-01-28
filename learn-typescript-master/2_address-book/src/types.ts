interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
  }
  
  interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }
  
  enum PhoneType{
    home = 'home',
    address = 'office',
    Studio = 'studio'
  }
  
export { Contact, PhoneType } ;