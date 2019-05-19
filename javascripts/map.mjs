class Mapa {
  constructor(mapa) {
    this.name = mapa.name;
    this.campaigns = mapa.campaigns;
  }
}

class Campaign {
  constructor(campaign) {
    this.name = campaign.name;
    this.missions = campaign.missions;
  }
}

class Mission {
  constructor(mission) {
    this.name = mission.name;
    this.mastery = [];
  }
}

const Maps = [];
Maps.push(new Mapa({}));
