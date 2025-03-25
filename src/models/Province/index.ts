export default class Province {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const provinces: Province[] = [
  new Province(1, 'ភ្នំពេញ (Phnom Penh)'),
  new Province(2, 'បន្ទាយមានជ័យ (Banteay Meanchey)'),
  new Province(3, 'បាត់ដំបង (Battambang)'),
  new Province(4, 'កំពង់ចាម (Kampong Cham)'),
  new Province(5, 'កំពង់ឆ្នាំង (Kampong Chhnang)'),
  new Province(6, 'កំពង់ស្ពឺ (Kampong Speu)'),
  new Province(7, 'កំពង់ធំ (Kampong Thom)'),
  new Province(8, 'កំពត (Kampot)'),
  new Province(9, 'កណ្ដាល (Kandal)'),
  new Province(10, 'កែប (Kep)'),
  new Province(11, 'កោះកុង (Koh Kong)'),
  new Province(12, 'ក្រចេះ (Kratié)'),
  new Province(13, 'មណ្ឌលគីរី (Mondulkiri)'),
  new Province(14, 'ឧត្តរមានជ័យ (Oddar Meanchey)'),
  new Province(15, 'ប៉ៃលិន (Pailin)'),
  new Province(16, 'ព្រះវិហារ (Preah Vihear)'),
  new Province(17, 'ព្រះសីហនុ (Preah Sihanouk)'),
  new Province(18, 'ពោធិ៍សាត់ (Pursat)'),
  new Province(19, 'រតនគីរី (Ratanakiri)'),
  new Province(20, 'សៀមរាប (Siem Reap)'),
  new Province(21, 'ស្ទឹងត្រែង (Stung Treng)'),
  new Province(22, 'ស្វាយរៀង (Svay Rieng)'),
  new Province(23, 'តាកែវ (Takeo)'),
  new Province(24, 'ត្បូងឃ្មុំ (Tboung Khmum)'),
  new Province(25, 'ព្រៃវែង (Prey Veng)'),
];
