const countryList = {
  "00": "00 Token",
  "1000sats": "",
  "1inch": "1inch",
  "aave": "Aave",
  "abt": "Arcblock",
  "ach": "Alchemy Pay",
  "acs": "ACryptoS",
  "ada": "Cardano",
  "aed": "Emirati Dirham",
  "aergo": "Aergo",
  "afn": "Afghan Afghani",
  "agix": "SingularityNET",
  "agld": "Adventure Gold",
  "aioz": "Aioz Network",
  "akt": "Akash Network",
  "alcx": "Alchemix",
  "aleph": "Aleph.im",
  "algo": "Algorand",
  "alice": "My Neighbor Alice",
  "all": "Albanian Lek",
  "amd": "Armenian Dram",
  "amp": "Amp",
  "ang": "Dutch Guilder",
  "ankr": "Ankr Network",
  "ant": "Aragon",
  "aoa": "Angolan Kwanza",
  "ape": "ApeCoin",
  "api3": "API3",
  "apt": "Aptos",
  "ar": "Arweave",
  "arb": "Arbitrum",
  "arpa": "ARPA Chain",
  "ars": "Argentine Peso",
  "asm": "Assemble Protocol",
  "ast": "AirSwap",
  "ata": "Automata Network",
  "atom": "Cosmos",
  "ats": "Austrian Schilling",
  "auction": "Bounce Token AUCTION",
  "aud": "Australian Dollar",
  "audio": "Audius",
  "aurora": "Aurora",
  "avax": "Avalanche",
  "avt": "Aventus",
  "awg": "Aruban or Dutch Guilder",
  "axl": "Axelar",
  "axs": "Axie Infinity",
  "azm": "Azerbaijani Manat",
  "azn": "Azerbaijan Manat",
  "badger": "Badger DAO",
  "bake": "BakeryToken",
  "bal": "Balancer",
  "bam": "Bosnian Convertible Mark",
  "band": "Band Protocol",
  "bat": "Basic Attention Token",
  "bbd": "Barbadian or Bajan Dollar",
  "bch": "Bitcoin Cash",
  "bdt": "Bangladeshi Taka",
  "bef": "Belgian Franc",
  "bgn": "Bulgarian Lev",
  "bhd": "Bahraini Dinar",
  "bico": "Biconomy",
  "bif": "Burundian Franc",
  "bigtime": "",
  "bit": "BitDAO",
  "blur": "Blur",
  "blz": "Bluzelle",
  "bmd": "Bermudian Dollar",
  "bnb": "Binance Coin",
  "bnd": "Bruneian Dollar",
  "bnt": "Bancor Network",
  "bob": "Bolivian Bolíviano",
  "boba": "Boba Network",
  "bond": "BarnBridge",
  "bonk": "",
  "brl": "Brazilian Real",
  "bsd": "Bahamian Dollar",
  "bsv": "Bitcoin SV",
  "bsw": "Biswap",
  "btc": "Bitcoin",
  "btcb": "Bitcoin BEP2",
  "btg": "Bitcoin Gold",
  "btn": "Bhutanese Ngultrum",
  "btrst": "Braintrust",
  "btt": "BitTorrent",
  "busd": "Binance USD",
  "bwp": "Botswana Pula",
  "byn": "Belarusian Ruble",
  "byr": "Belarusian Ruble",
  "bzd": "Belizean Dollar",
  "c98": "Coin98",
  "cad": "Canadian Dollar",
  "cake": "PancakeSwap",
  "cbeth": "Coinbase Wrapped Staked ETH",
  "cdf": "Congolese Franc",
  "celo": "Celo",
  "celr": "Celer Network",
  "cfx": "Conflux",
  "cgld": "Celo Gold",
  "chf": "Swiss Franc",
  "chz": "Chiliz",
  "clp": "Chilean Peso",
  "clv": "Clover Finance",
  "cnh": "Chinese Yuan Renminbi Offshore",
  "cny": "Chinese Yuan Renminbi",
  "comp": "Compound",
  "cop": "Colombian Peso",
  "coti": "COTI",
  "coval": "COVAL",
  "crc": "Costa Rican Colon",
  "cro": "Crypto.com Chain",
  "crpt": "Crypterium",
  "crv": "Curve DAO Token",
  "cspr": "Casper",
  "ctsi": "Cartesi",
  "ctx": "Cryptex Finance",
  "cuc": "Cuban Convertible Peso",
  "cup": "Cuban Peso",
  "cvc": "Civic",
  "cve": "Cape Verdean Escudo",
  "cvx": "Convex Finance",
  "cyp": "Cypriot Pound",
  "czk": "Czech Koruna",
  "dai": "DAI",
  "dar": "Mines of Dalarnia",
  "dash": "Digital Cash",
  "dcr": "Decred",
  "ddx": "DerivaDAO",
  "dem": "German Deutsche Mark",
  "deso": "Decentralized Social",
  "dext": "DEXTools",
  "dfi": "DfiStarter",
  "dia": "Dia",
  "dimo": "DIMO",
  "djf": "Djiboutian Franc",
  "dkk": "Danish Krone",
  "dnt": "District0x",
  "doge": "Dogecoin",
  "dop": "Dominican Peso",
  "dot": "Polkadot",
  "drep": "Drep [new]",
  "dydx": "dYdX",
  "dyp": "DeFi Yield Protocol",
  "dzd": "Algerian Dinar",
  "eek": "Estonian Kroon",
  "egld": "Elrond",
  "egp": "Egyptian Pound",
  "ela": "Elastos",
  "enj": "Enjin Coin",
  "ens": "Ethereum Name Service",
  "eos": "EOS",
  "ern": "Eritrean Nakfa",
  "esp": "Spanish Peseta",
  "etb": "Ethiopian Birr",
  "etc": "Ethereum Classic",
  "eth": "Ethereum",
  "eth2": "Ethereum 2.0",
  "eur": "Euro",
  "euroc": "Euro Coin",
  "farm": "Harvest Finance",
  "fei": "Fei USD",
  "fet": "Fetch.ai",
  "fida": "Bonfida",
  "fil": "Filecoin",
  "fim": "Finnish Markka",
  "fis": "Stafi",
  "fjd": "Fijian Dollar",
  "fkp": "Falkland Island Pound",
  "flow": "Flow",
  "flr": "FLARE",
  "fort": "Forta",
  "forth": "Ampleforth Governance Token",
  "fox": "Shapeshift FOX Token",
  "frax": "Frax",
  "frf": "French Franc",
  "ftm": "Fantom",
  "ftt": "FarmaTrust",
  "fx": "Function X",
  "fxs": "Frax Share",
  "gal": "Project Galaxy",
  "gala": "Gala",
  "gbp": "British Pound",
  "gel": "Georgian Lari",
  "gfi": "Goldfinch",
  "ggp": "Guernsey Pound",
  "ghc": "Ghanaian Cedi",
  "ghs": "Ghanaian Cedi",
  "ghst": "Aavegotchi",
  "gip": "Gibraltar Pound",
  "glm": "Golem",
  "gmd": "Gambian Dalasi",
  "gmt": "Stepn",
  "gmx": "Goldmaxcoin",
  "gnf": "Guinean Franc",
  "gno": "Gnosis",
  "gnt": "GreenTrust",
  "gods": "Gods Unchained",
  "grd": "Greek Drachma",
  "grt": "The Graph",
  "gst": "Green Satoshi Token",
  "gt": "GateToken",
  "gtc": "Gitcoin",
  "gtq": "Guatemalan Quetzal",
  "gusd": "Gemini US Dollar",
  "gyd": "Guyanese Dollar",
  "gyen": "GYEN",
  "hbar": "Hedera",
  "hft": "Hashflow",
  "high": "Highstreet",
  "hkd": "Hong Kong Dollar",
  "hnl": "Honduran Lempira",
  "hnt": "Helium",
  "hopr": "HOPR",
  "hot": "Hydro Protocol",
  "hrk": "Croatian Kuna",
  "ht": "Huobi Token",
  "htg": "Haitian Gourde",
  "huf": "Hungarian Forint",
  "icp": "Internet Computer",
  "idex": "IDEX",
  "idr": "Indonesian Rupiah",
  "iep": "Irish Pound",
  "ils": "Israeli Shekel",
  "ilv": "Illuvium",
  "imp": "Isle of Man Pound",
  "imx": "Immutable X",
  "index": "Index Cooperative",
  "inj": "Injective",
  "inr": "Indian Rupee",
  "inv": "Inverse Finance",
  "iotx": "IoTeX",
  "iqd": "Iraqi Dinar",
  "irr": "Iranian Rial",
  "isk": "Icelandic Krona",
  "itl": "Italian Lira",
  "jasmy": "Jasmy",
  "jep": "Jersey Pound",
  "jmd": "Jamaican Dollar",
  "jod": "Jordanian Dinar",
  "jpy": "Japanese Yen",
  "jto": "",
  "jup": "Jupiter",
  "kas": "",
  "kava": "Kava",
  "kcs": "Kucoin",
  "kda": "Kadena",
  "keep": "Keep Network",
  "kes": "Kenyan Shilling",
  "kgs": "Kyrgyzstani Som",
  "khr": "Cambodian Riel",
  "klay": "Klaytn",
  "kmf": "Comorian Franc",
  "knc": "Kyber Network Crystals",
  "kpw": "North Korean Won",
  "krl": "Kryll",
  "krw": "South Korean Won",
  "ksm": "Kusama",
  "kwd": "Kuwaiti Dinar",
  "kyd": "Caymanian Dollar",
  "kzt": "Kazakhstani Tenge",
  "lak": "Lao Kip",
  "lbp": "Lebanese Pound",
  "lcx": "LCX",
  "ldo": "Lido DAO Token",
  "leo": "LEOcoin",
  "link": "Chainlink",
  "lit": "Litentry",
  "lkr": "Sri Lankan Rupee",
  "loka": "League of Kingdoms Arena",
  "loom": "Loom Network",
  "lpt": "Livepeer (LPT)",
  "lqty": "Liquity",
  "lrc": "Loopring",
  "lrd": "Liberian Dollar",
  "lseth": "Liquid Staked Ethereum",
  "lsl": "Basotho Loti",
  "ltc": "Litecoin",
  "ltl": "Lithuanian Litas",
  "luf": "Luxembourg Franc",
  "luna": "Terra",
  "lunc": "",
  "lvl": "Latvian Lat",
  "lyd": "Libyan Dinar",
  "mad": "Moroccan Dirham",
  "magic": "MAGIC",
  "mana": "Mana Coin Decentraland",
  "mask": "Mask Network",
  "math": "MATH",
  "matic": "Polygon",
  "mbx": "MobieCoin",
  "mco2": "Moss Carbon Credit",
  "mdl": "Moldovan Leu",
  "mdt": "Measurable Data Token",
  "media": "Media Network",
  "metis": "MetisDAO",
  "mga": "Malagasy Ariary",
  "mgf": "Malagasy Franc",
  "mina": "Mina",
  "mir": "Mirror Protocol",
  "mkd": "Macedonian Denar",
  "mkr": "Maker",
  "mln": "Enzyme",
  "mmk": "Burmese Kyat",
  "mnde": "Marinade",
  "mnt": "Mongolian Tughrik",
  "mona": "Monavale",
  "mop": "Macau Pataca",
  "mpl": "Maple",
  "mro": "Mauritanian Ouguiya",
  "mru": "Mauritanian Ouguiya",
  "msol": "Marinade Staked SOL",
  "mtl": "Maltese Lira",
  "multi": "Multichain",
  "mur": "Mauritian Rupee",
  "musd": "mStableUSD",
  "muse": "Muse",
  "mvr": "Maldivian Rufiyaa",
  "mwk": "Malawian Kwacha",
  "mxc": "MXC",
  "mxn": "Mexican Peso",
  "mxv": "",
  "myr": "Malaysian Ringgit",
  "mzm": "Mozambican Metical",
  "mzn": "Mozambican Metical",
  "nad": "Namibian Dollar",
  "nct": "Polyswarm",
  "near": "NEAR Protocol",
  "neo": "NEO",
  "nest": "NEST Protocol",
  "nexo": "NEXO",
  "nft": "NFT",
  "ngn": "Nigerian Naira",
  "nio": "Nicaraguan Cordoba",
  "nkn": "NKN",
  "nlg": "Dutch Guilder",
  "nmr": "Numeraire Network",
  "nok": "Norwegian Krone",
  "npr": "Nepalese Rupee",
  "nu": "NuCypher",
  "nzd": "New Zealand Dollar",
  "ocean": "Ocean Protocol",
  "ogn": "Origin Token",
  "okb": "Okex",
  "omg": "Omisego",
  "omr": "Omani Rial",
  "one": "Menlo One",
  "ooki": "Ooki Protocol",
  "op": "Optimism",
  "orca": "Orca",
  "orn": "Orion Protocol",
  "osmo": "Osmosis",
  "oxt": "Orchid Network",
  "pab": "Panamanian Balboa",
  "pax": "Paxos Standard Token",
  "paxg": "PAX Gold",
  "pen": "Peruvian Sol",
  "perp": "Perpetual Protocol",
  "pgk": "Papua New Guinean Kina",
  "php": "Philippine Peso",
  "pkr": "Pakistani Rupee",
  "pla": "PlayDapp",
  "pln": "Polish Zloty",
  "plu": "Pluton",
  "png": "Pangolin",
  "pols": "Polkastarter",
  "poly": "Polymath",
  "pond": "Marlin",
  "powr": "Powerledger",
  "prime": "Echelon Prime",
  "pro": "Propy",
  "prq": "PARSIQ",
  "pte": "Portuguese Escudo",
  "pundix": "Pundi X (New)",
  "pyg": "Paraguayan Guarani",
  "pyr": "Vulcan Forged PYR",
  "qar": "Qatari Riyal",
  "qi": "BENQI",
  "qnt": "Quant",
  "qsp": "Quantstamp",
  "qtum": "QTUM",
  "quick": "QuickSwap",
  "rad": "Radicle",
  "rai": "Rai Reflex Index",
  "rare": "SuperRare",
  "rari": "Rarible",
  "rbn": "Ribbon FInance",
  "ren": "renBTC",
  "rep": "Augur",
  "repv2": "REPv2",
  "req": "Request",
  "rgt": "Rari Governance Token",
  "rlc": "iExec RLC",
  "rly": "Rally",
  "rndr": "Render Token",
  "rol": "Romanian Leu",
  "ron": "Romanian Leu",
  "rose": "Oasis Network",
  "rpl": "Rocket Pool",
  "rsd": "Serbian Dinar",
  "rub": "Russian Ruble",
  "rune": "THORChain (ERC20)",
  "rvn": "Ravencoin",
  "rwf": "Rwandan Franc",
  "sand": "The Sandbox",
  "sar": "Saudi Arabian Riyal",
  "sbd": "Solomon Islander Dollar",
  "scr": "Seychellois Rupee",
  "sdd": "Sudanese Dinar",
  "sdg": "Sudanese Pound",
  "sek": "Swedish Krona",
  "sgd": "Singapore Dollar",
  "shib": "Shiba Inu",
  "shp": "Saint Helenian Pound",
  "shping": "Shping Coin",
  "sit": "Slovenian Tolar",
  "skk": "Slovak Koruna",
  "skl": "SKALE Network",
  "sle": "Sierra Leonean Leone",
  "sll": "Sierra Leonean Leone",
  "snt": "Status Network",
  "snx": "Synthetix Network",
  "sol": "Solana",
  "sos": "Somali Shilling",
  "spa": "Sperax",
  "spell": "Spell Token",
  "spl": "Seborgan Luigino",
  "srd": "Surinamese Dollar",
  "srg": "Surinamese Guilder",
  "std": "Sao Tomean Dobra",
  "stg": "Stargate Finance",
  "stn": "Sao Tomean Dobra",
  "storj": "Storj",
  "stx": "Stacks",
  "sui": "Sui",
  "suku": "SUKU",
  "super": "SuperFarm",
  "sushi": "SushiSwap",
  "svc": "Salvadoran Colon",
  "swftc": "SwftCoin",
  "sylo": "Sylo",
  "syn": "Synapse",
  "syp": "Syrian Pound",
  "szl": "Swazi Lilangeni",
  "t": "Threshold",
  "thb": "Thai Baht",
  "theta": "Theta",
  "tia": "Tianhe",
  "time": "Chrono.tech",
  "tjs": "Tajikistani Somoni",
  "tmm": "Turkmenistani Manat",
  "tmt": "Turkmenistani Manat",
  "tnd": "Tunisian Dinar",
  "ton": "Tokamak Network",
  "tone": "TE-FOOD",
  "top": "Tongan Pa'anga",
  "trac": "OriginTrail",
  "trb": "Tellor",
  "tribe": "Tribe",
  "trl": "Turkish Lira",
  "tru": "TrueFi",
  "trx": "TRON",
  "try": "Turkish Lira",
  "ttd": "Trinidadian Dollar",
  "ttt": "Tap Project",
  "tusd": "True USD",
  "tvd": "Tuvaluan Dollar",
  "tvk": "Terra Virtua Kolect",
  "twd": "Taiwan New Dollar",
  "twt": "Trust Wallet Token",
  "tzs": "Tanzanian Shilling",
  "uah": "Ukrainian Hryvnia",
  "ugx": "Ugandan Shilling",
  "uma": "Universal Market Access",
  "unfi": "Unifi Protocol DAO",
  "uni": "Uniswap",
  "upi": "Pawtocol",
  "usd": "US Dollar",
  "usdc": "USDC",
  "usdp": "USDP Stablecoin",
  "usdt": "Tether",
  "ust": "TerraUSD",
  "uyu": "Uruguayan Peso",
  "uzs": "Uzbekistani Som",
  "val": "Vatican City Lira",
  "veb": "Venezuelan Bolívar",
  "vef": "Venezuelan Bolívar",
  "ves": "Venezuelan Bolívar",
  "vet": "Vechain",
  "vgx": "Voyager Token",
  "vnd": "Vietnamese Dong",
  "voxel": "Voxies",
  "vtho": "VeChainThor",
  "vuv": "Ni-Vanuatu Vatu",
  "wampl": "Wrapped Ampleforth",
  "waves": "Waves",
  "waxl": "Axelar",
  "wbtc": "Wrapped Bitcoin",
  "wcfg": "Wrapped Centrifuge",
  "wemix": "WEMIX",
  "wluna": "Wrapped LUNA",
  "woo": "WOO Network",
  "wst": "Samoan Tala",
  "xaf": "Central African CFA Franc BEAC",
  "xag": "Silver Ounce",
  "xau": "Gold Ounce",
  "xaut": "Tether Gold",
  "xcd": "East Caribbean Dollar",
  "xch": "Chia",
  "xcn": "Chain",
  "xdc": "XDC Network",
  "xdr": "IMF Special Drawing Rights",
  "xec": "Eternal Coin",
  "xem": "NEM",
  "xlm": "Stellar Lumen",
  "xmon": "XMON",
  "xmr": "Monero",
  "xof": "CFA Franc",
  "xpd": "Palladium Ounce",
  "xpf": "CFP Franc",
  "xpt": "Platinum Ounce",
  "xrp": "Ripple",
  "xtz": "Tezos",
  "xyo": "XYO Network",
  "yer": "Yemeni Rial",
  "yfi": "Yearn Finance",
  "yfii": "DFI.Money",
  "zar": "South African Rand",
  "zec": "ZCash",
  "zen": "Horizen",
  "zil": "Zilliqa",
  "zmk": "Zambian Kwacha",
  "zmw": "Zambian Kwacha",
  "zrx": "ZRX 0x",
  "zwd": "Zimbabwean Dollar",
  "zwl": "Zimbabwean Dollar"
}