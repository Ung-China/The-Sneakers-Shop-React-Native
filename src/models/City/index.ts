export default class City {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const cities: City[] = [
  new City(1, 'ភ្នំពេញ (Phnom Penh)'),
  new City(2, 'បន្ទាយមានជ័យ (Banteay Meanchey)'),
  new City(3, 'បាត់ដំបង (Battambang)'),
  new City(4, 'កំពង់ចាម (Kampong Cham)'),
  new City(5, 'កំពង់ឆ្នាំង (Kampong Chhnang)'),
  new City(6, 'កំពង់ស្ពឺ (Kampong Speu)'),
  new City(7, 'កំពង់ធំ (Kampong Thom)'),
  new City(8, 'កំពត (Kampot)'),
  new City(9, 'កណ្ដាល (Kandal)'),
  new City(10, 'កែប (Kep)'),
  new City(11, 'កោះកុង (Koh Kong)'),
  new City(12, 'ក្រចេះ (Kratié)'),
  new City(13, 'មណ្ឌលគីរី (Mondulkiri)'),
  new City(14, 'ឧត្តរមានជ័យ (Oddar Meanchey)'),
  new City(15, 'ប៉ៃលិន (Pailin)'),
  new City(16, 'ព្រះវិហារ (Preah Vihear)'),
  new City(17, 'ព្រះសីហនុ (Preah Sihanouk)'),
  new City(18, 'ពោធិ៍សាត់ (Pursat)'),
  new City(19, 'រតនគីរី (Ratanakiri)'),
  new City(20, 'សៀមរាប (Siem Reap)'),
  new City(21, 'ស្ទឹងត្រែង (Stung Treng)'),
  new City(22, 'ស្វាយរៀង (Svay Rieng)'),
  new City(23, 'តាកែវ (Takeo)'),
  new City(24, 'ត្បូងឃ្មុំ (Tboung Khmum)'),
  new City(25, 'ព្រៃវែង (Prey Veng)'),
];
