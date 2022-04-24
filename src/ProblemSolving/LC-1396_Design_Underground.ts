export const testDesignUnderground = () => {
  console.log("design");

  const undergroundSystem = new UndergroundSystem();
  //   undergroundSystem.checkIn(45, "Leyton", 3);
  //   undergroundSystem.checkIn(32, "Paradise", 8);
  //   undergroundSystem.checkIn(27, "Leyton", 10);
  //   undergroundSystem.checkOut(45, "Waterloo", 15); // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
  //   undergroundSystem.checkOut(27, "Waterloo", 20); // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
  //   undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
  //   console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
  //   console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
  //   undergroundSystem.checkIn(10, "Leyton", 24);
  //   console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 11.00000
  //   undergroundSystem.checkOut(10, "Waterloo", 38); // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
  //   console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
  //   undergroundSystem.checkMaps();

  undergroundSystem.checkIn(10, "Leyton", 3);
  undergroundSystem.checkOut(10, "Paradise", 8); // Customer 10 "Leyton" -> "Paradise" in 8-3 = 5
  console.log(undergroundSystem.getAverageTime("Leyton", "Paradise")); // return 5.00000, (5) / 1 = 5
  undergroundSystem.checkIn(5, "Leyton", 10);
  undergroundSystem.checkOut(5, "Paradise", 16); // Customer 5 "Leyton" -> "Paradise" in 16-10 = 6
  console.log(undergroundSystem.getAverageTime("Leyton", "Paradise")); // return 5.50000, (5 + 6) / 2 = 5.5
  undergroundSystem.checkIn(2, "Leyton", 21);
  undergroundSystem.checkOut(2, "Paradise", 30); // Customer 2 "Leyton" -> "Paradise" in 30-21 = 9
  console.log(undergroundSystem.getAverageTime("Leyton", "Paradise")); // return 6.66667, (5 + 6 + 9) / 3 = 6.66667
};

class UndergroundSystem {
  private stationTimeMap: { [key: string]: number[] };
  private checkinMap: {
    [key: string]: { checkingStation: string; checkinTime: number };
  };

  constructor() {
    this.stationTimeMap = {};
    this.checkinMap = {};
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.checkinMap[id] = { checkingStation: stationName, checkinTime: t };

    //console.log(this.checkinMap);
  }

  checkOut(id: number, stationName: string, t: number): void {
    const { checkingStation, checkinTime } = this.checkinMap[`${id}`];
    const timeSpent = t - checkinTime;

    const timeArray =
      this.stationTimeMap[`${checkingStation}.${stationName}`] ?? [];
    timeArray.push(timeSpent);
    this.stationTimeMap[`${checkingStation}.${stationName}`] = timeArray;
    delete this.checkinMap[id];
  }

  getAverageTime(startStation: string, endStation: string): number {
    const timeArray = this.stationTimeMap[`${startStation}.${endStation}`];

    const sum = timeArray.reduce((partialSum, a) => partialSum + a, 0);
    const avg = sum / timeArray.length;
    return avg;
  }

  checkMaps(): void {
    console.log(this.stationTimeMap);
    console.log(this.checkinMap);
  }
}
