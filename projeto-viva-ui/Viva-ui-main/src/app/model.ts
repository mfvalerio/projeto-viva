import * as moment from 'moment';

export class Categories {
  id?: number;
}

export class Pessoa {
  id?: number;
}

export class Evento {
  id?: number;
  category = new Categories();
  description?: string;
  address?: string;
  date?: Date;
  timeStart?: Date;
  timeEnd?: Date;
  
  //pessoa = new Pessoa();

  static toJson(evento: Evento): any {
    return {
      id: evento.id,
      category: evento.category,
      description: evento.description,
      address: evento.address,
      date: moment(evento.date).format('DD/MM/YYYY'),
      timeStart: evento.date,
      timeEnd: evento.date
      //pessoa: evento.pessoa,
     
    };
  }
}
