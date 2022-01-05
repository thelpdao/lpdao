// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  "decimals": 18,
  "airdrop": {
    "0x6c7459c4B3B84E24734E59D4a6749EB02Ea26406": 100000000000000,
    "0x24846CB373091A9b1B77B54b98F9A8400d3a53D2": 100000000000000,
    "0x8bcB993fB449F22a0e89444F44A59d1FD093756C": 10000000,
    "0x5a6eEd078f8D3Ac07e3b105d4ce735fd183E4F92": 10000000,
    "0xA0aD4360081ac3F3FA7C693dafDE09767EAa2ec7": 10000000,
    "0x4626eb76a7c2896645B0117614Ec0555e6E3a180": 10000000,
    "0xE2c1a36f6d39F3D1698078e6579fCAbb779B5a32": 10000000
  },
};

// Export config
export default config;
  