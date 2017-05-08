interface FormatOptions {
    /**
     * The input data to format.
     */
    value: Date | string | number;
    /**
     * The field type (for example, DATE, CURRENCY, INTEGER). Set using the format.Type enum.
     */
    type: Type;
}

interface FormatDateTimeOptions {
    /**
     * The Date Object being converted into a string.
     * If parsing a string to a timezone, the string must include seconds.
     */
    value: Date | string;
    /**
     * The field type (either DATETIME or DATETIMETX). Set using the format.Type enum.
     */
    type: Type;
    /**
     * -optional- The time zone specified for the returned string. Set using the format.Timezone enum or key.
     * If a time zone is not specified, the time zone is set based on user preference.
     * If the time zone is invalid, the time zone is set to GMT.
     */
    timezone?: Timezone;
}

/**
 * Use format to convert an Object (like a Date) into a specific NS string format. 
 * Options: value (Date|string|number), type (format.FormatType).
 */
export function format(options: FormatOptions): string | any;

/**
 * Use format to convert an Object (like a Date) into a specific NS string format. 
 * Options: value (Date|string), type (format.FormatType), timezone (enum).
 */
export function format(options: FormatDateTimeOptions): string | any;

/**
 * Use parse to convert a string into an object, like a Date.
 * Options: value (Date|string|number), type (format.FormatType).
 */
export function parse(options: FormatOptions): Date | string | number;

/**
 * Use parse to convert a string into an object, like a Date.
 * Options: value (Date|string), type (format.FormatType), timezone (enum).
 */
export function parse(options: FormatDateTimeOptions): Date | string | number;

/**
 * -enum- Holds the string values for the supported field types. 
 * Used to set the value of the options.type parameter.
 */
export enum Type {
    DATE = "date",
    TIME = "time",
    TIMETRACK = "timetrack",
    TIMEOFDAY = "timeofday",
    DATETIME = "datetime",
    DATETIMETZ = "datetimetz",
    INTEGER = "integer",
    POSINTEGER = "posinteger",
    PERCENT = "percent",
    RATE = "rate",
    RATEHIGHPRECISION = "ratehighprecision",
    FLOAT = "float",
    POSFLOAT = "posfloat",
    NONNEGFLOAT = "nonnegfloat",
    POSCURRENCY = "poscurrency",
    NONNEGCURRENCY = "nonnegcurrency",
    CURRENCY = "currency",
    CURRENCY2 = "currency2",
    EMAIL = "email",
    EMAILS = "emails",
    URL = "url",
    CHECKBOX = "checkbox",
    CCNUMBER = "ccnumber",
    RADIO = "radio",
    PHONE = "phone",
    FULLPHONE = "fullphone",
    IDENTIFIER = "identifier",
    IDENTIFIERANYCASE = "identifieranycase",
    FUNCTION = "function",
    QUOTEDFUNCTION = "'function'",
    MMYYDATE = "mmyydate",
    CCEXPDATE = "ccexpdate",
    CCVALIDFROM = "ccvalidfrom",
    COLOR = "color",
    PACKAGE = "package",
    FURIGANA = "furigana",
    ADDRESS = "address",
    TEXT = "text"
}

/**
 * -enum- Holds the string values for supported time zone formats. 
 * Used to set the value of the options.timezone parameter.
 */
export enum Timezone {
    ETC_GMT_PLUS_12,
    PACIFIC_SAMOA,
    PACIFIC_HONOLULU,
    AMERICA_ANCHORAGE,
    AMERICA_LOS_ANGELES,
    AMERICA_TIJUANA,
    AMERICA_DENVER,
    AMERICA_PHOENIX,
    AMERICA_CHIHUAHUA,
    AMERICA_CHICAGO,
    AMERICA_REGINA,
    AMERICA_GUATEMALA,
    AMERICA_MEXICO_CITY,
    AMERICA_NEW_YORK,
    US_EAST_INDIANA,
    AMERICA_BOGOTA,
    AMERICA_CARACAS,
    AMERICA_HALIFAX,
    AMERICA_LA_PAZ,
    AMERICA_MANAUS,
    AMERICA_SANTIAGO,
    AMERICA_ST_JOHNS,
    AMERICA_SAO_PAULO,
    AMERICA_BUENOS_AIRES,
    ETC_GMT_PLUS_3,
    AMERICA_GODTHAB,
    AMERICA_MONTEVIDEO,
    AMERICA_NORONHA,
    ETC_GMT_PLUS_1,
    ATLANTIC_AZORES,
    EUROPE_LONDON,
    GMT,
    ATLANTIC_REYKJAVIK,
    EUROPE_WARSAW,
    EUROPE_PARIS,
    ETC_GMT_MINUS_1,
    EUROPE_AMSTERDAM,
    EUROPE_BUDAPEST,
    AFRICA_CAIRO,
    EUROPE_ISTANBUL,
    ASIA_JERUSALEM,
    ASIA_AMMAN,
    ASIA_BEIRUT,
    AFRICA_JOHANNESBURG,
    EUROPE_KIEV,
    EUROPE_MINSK,
    AFRICA_WINDHOEK,
    ASIA_RIYADH,
    EUROPE_MOSCOW,
    ASIA_BAGHDAD,
    AFRICA_NAIROBI,
    ASIA_TEHRAN,
    ASIA_MUSCAT,
    ASIA_BAKU,
    ASIA_YEREVAN,
    ETC_GMT_MINUS_3,
    ASIA_KABUL,
    ASIA_KARACHI,
    ASIA_YEKATERINBURG,
    ASIA_TASHKENT,
    ASIA_CALCUTTA,
    ASIA_KATMANDU,
    ASIA_ALMATY,
    ASIA_DHAKA,
    ASIA_RANGOON,
    ASIA_BANGKOK,
    ASIA_KRASNOYARSK,
    ASIA_HONG_KONG,
    ASIA_KUALA_LUMPUR,
    ASIA_TAIPEI,
    AUSTRALIA_PERTH,
    ASIA_IRKUTSK,
    ASIA_MANILA,
    ASIA_SEOUL,
    ASIA_TOKYO,
    ASIA_YAKUTSK,
    AUSTRALIA_DARWIN,
    AUSTRALIA_ADELAIDE,
    AUSTRALIA_SYDNEY,
    AUSTRALIA_BRISBANE,
    AUSTRALIA_HOBART,
    PACIFIC_GUAM,
    ASIA_VLADIVOSTOK,
    ASIA_MAGADAN,
    PACIFIC_KWAJALEIN,
    PACIFIC_AUCKLAND,
    PACIFIC_TONGATAPU,
}
