import ad from "../../assets/images/flags/ad.svg"
import at from "../../assets/images/flags/at.svg"
import be from "../../assets/images/flags/be.svg"
import bg from "../../assets/images/flags/bg.svg"
import ch from "../../assets/images/flags/ch.svg"
import cz from "../../assets/images/flags/cz.svg"
import dk from "../../assets/images/flags/dk.svg"
import ee from "../../assets/images/flags/ee.svg"
import fi from "../../assets/images/flags/fi.svg"
import fr from "../../assets/images/flags/fr.svg"
import gbeng from "../../assets/images/flags/gb-eng.svg"
import gbnir from "../../assets/images/flags/gb-nir.svg"
import gbsct from "../../assets/images/flags/gb-sct.svg"
import gbwls from "../../assets/images/flags/gb-wls.svg"
import gr from "../../assets/images/flags/gr.svg"
import hr from "../../assets/images/flags/hr.svg"
import hu from "../../assets/images/flags/hu.svg"
import ie from "../../assets/images/flags/ie.svg"
import is from "../../assets/images/flags/is.svg"
import it from "../../assets/images/flags/it.svg"
import li from "../../assets/images/flags/li.svg"
import lt from "../../assets/images/flags/lt.svg"
import lu from "../../assets/images/flags/lu.svg"
import lv from "../../assets/images/flags/lv.svg"
import mc from "../../assets/images/flags/mc.svg"
import me from "../../assets/images/flags/me.svg"
import mk from "../../assets/images/flags/mk.svg"
import mt from "../../assets/images/flags/mt.svg"
import nl from "../../assets/images/flags/nl.svg"
import no from "../../assets/images/flags/no.svg"
import pl from "../../assets/images/flags/pl.svg"
import pt from "../../assets/images/flags/pt.svg"
import ro from "../../assets/images/flags/ro.svg"
import rs from "../../assets/images/flags/rs.svg"
import se from "../../assets/images/flags/se.svg"
import si from "../../assets/images/flags/si.svg"
import sk from "../../assets/images/flags/sk.svg"
import sm from "../../assets/images/flags/sm.svg"
import ua from "../../assets/images/flags/ua.svg"
import va from "../../assets/images/flags/va.svg"
import cy from "../../assets/images/flags/cy.svg"

const country = [
    {
        id: 1,
        flagImg: ad,
        countryName: "Andorra",
        countryCode: "+376",
        iso2: "AD",
        iso3: "AND"
    },
    {
        id: 2,
        flagImg: at,
        countryName: "Austria",
        countryCode: "+43",
        iso2: "AT",
        iso3: "AUT"
    },
    {
        id: 3,
        flagImg: be,
        countryName: "Belgium",
        countryCode: "+32",
        iso2: "BE",
        iso3: "BEL"
    },
    {
        id: 4,
        flagImg: bg,
        countryName: "Bulgaria",
        countryCode: "+359",
        iso2: "BG",
        iso3: "BGR"
    },
    {
        id: 5,
        flagImg: hr,
        countryName: "Croatia",
        countryCode: "+385",
        iso2: "HR",
        iso3: "HRV"
    },
    {
        id: 6,
        flagImg: cy,
        countryName: "Cyprus",
        countryCode: "+357",
        iso2: "CY",
        iso3: "CYP"
    },
    {
        id: 7,
        flagImg: cz,
        countryName: "Czech Republic",
        countryCode: "+420",
        iso2: "CZ",
        iso3: "CZE"
    },
    {
        id: 8,
        flagImg: dk,
        countryName: "Denmark",
        countryCode: "+45",
        iso2: "DK",
        iso3: "DNK"
    },
    {
        id: 9,
        flagImg: ee,
        countryName: "Estonia",
        countryCode: "+372",
        iso2: "EE",
        iso3: "EST"
    },
    {
        id: 10,
        flagImg: fi,
        countryName: "Finland",
        countryCode: "+358",
        iso2: "FI",
        iso3: "FIN"
    },
    {
        id: 11,
        flagImg: fr,
        countryName: "France",
        countryCode: "+33",
        iso2: "FR",
        iso3: "FRA"
    },
    {
        id: 12,
        flagImg: gr,
        countryName: "Greece",
        countryCode: "+30",
        iso2: "GR",
        iso3: "GRC"
    },
    {
        id: 13,
        flagImg: gbeng,
        countryName: "England",
        countryCode: "+44",
        iso2: "GB",
        iso3: "GBR"
    },
    {
        id: 14,
        flagImg: gbnir,
        countryName: "Northern Ireland",
        countryCode: "+44",
        iso2: "GB",
        iso3: "GBR"
    },
    {
        id: 15,
        flagImg: gbsct,
        countryName: "Scotland",
        countryCode: "+44",
        iso2: "GB",
        iso3: "GBR"
    },
    {
        id: 16,
        flagImg: gbwls,
        countryName: "Wales",
        countryCode: "+44",
        iso2: "GB",
        iso3: "GBR"
    },
    {
        id: 17,
        flagImg: hu,
        countryName: "Hungary",
        countryCode: "+36",
        iso2: "HU",
        iso3: "HUN"
    },
    {
        id: 18,
        flagImg: is,
        countryName: "Iceland",
        countryCode: "+354",
        iso2: "IS",
        iso3: "ISL"
    },
    {
        id: 19,
        flagImg: ie,
        countryName: "Ireland",
        countryCode: "+353",
        iso2: "IE",
        iso3: "IRL"
    },
    {
        id: 20,
        flagImg: it,
        countryName: "Italy",
        countryCode: "+39",
        iso2: "IT",
        iso3: "ITA"
    },
    {
        id: 21,
        flagImg: li,
        countryName: "Liechtenstein",
        countryCode: "+423",
        iso2: "LI",
        iso3: "LIE"
    },
    {
        id: 22,
        flagImg: lt,
        countryName: "Lithuania",
        countryCode: "+370",
        iso2: "LT",
        iso3: "LTU"
    },
    {
        id: 23,
        flagImg: lu,
        countryName: "Luxembourg",
        countryCode: "+352",
        iso2: "LU",
        iso3: "LUX"
    },
    {
        id: 24,
        flagImg: lv,
        countryName: "Latvia",
        countryCode: "+371",
        iso2: "LV",
        iso3: "LVA"
    },
    {
        id: 25,
        flagImg: mc,
        countryName: "Monaco",
        countryCode: "+377",
        iso2: "MC",
        iso3: "MCO"
    },
    {
        id: 26,
        flagImg: me,
        countryName: "Montenegro",
        countryCode: "+382",
        iso2: "ME",
        iso3: "MNE"
    },
    {
        id: 27,
        flagImg: mk,
        countryName: "North Macedonia",
        countryCode: "+389",
        iso2: "MK",
        iso3: "MKD"
    },
    {
        id: 28,
        flagImg: mt,
        countryName: "Malta",
        countryCode: "+356",
        iso2: "MT",
        iso3: "MLT"
    },
    {
        id: 29,
        flagImg: nl,
        countryName: "Netherlands",
        countryCode: "+31",
        iso2: "NL",
        iso3: "NLD"
    },
    {
        id: 30,
        flagImg: no,
        countryName: "Norway",
        countryCode: "+47",
        iso2: "NO",
        iso3: "NOR"
    },
    {
        id: 31,
        flagImg: pl,
        countryName: "Poland",
        countryCode: "+48",
        iso2: "PL",
        iso3: "POL"
    },
    {
        id: 32,
        flagImg: pt,
        countryName: "Portugal",
        countryCode: "+351",
        iso2: "PT",
        iso3: "PRT"
    },
    {
        id: 33,
        flagImg: ro,
        countryName: "Romania",
        countryCode: "+40",
        iso2: "RO",
        iso3: "ROU"
    },
    {
        id: 34,
        flagImg: rs,
        countryName: "Serbia",
        countryCode: "+381",
        iso2: "RS",
        iso3: "SRB"
    },
    {
        id: 35,
        flagImg: sm,
        countryName: "San Marino",
        countryCode: "+378",
        iso2: "SM",
        iso3: "SMR"
    },
    {
        id: 36,
        flagImg: si,
        countryName: "Slovenia",
        countryCode: "+386",
        iso2: "SI",
        iso3: "SVN"
    },
    {
        id: 37,
        flagImg: sk,
        countryName: "Slovakia",
        countryCode: "+421",
        iso2: "SK",
        iso3: "SVK"
    },
    {
        id: 38,
        flagImg: se,
        countryName: "Sweden",
        countryCode: "+46",
        iso2: "SE",
        iso3: "SWE"
    },
    {
        id: 39,
        flagImg: ch,
        countryName: "Switzerland",
        countryCode: "+41",
        iso2: "CH",
        iso3: "CHE"
    },
    {
        id: 40,
        flagImg: ua,
        countryName: "Ukraine",
        countryCode: "+380",
        iso2: "UA",
        iso3: "UKR"
    },
    {
        id: 41,
        flagImg: va,
        countryName: "Holy See",
        countryCode: "+379",
        iso2: "VA",
        iso3: "VAT"
    }
];

export default country;
