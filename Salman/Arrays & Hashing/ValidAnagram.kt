fun isAnagram(s: String, t: String): Boolean {
    if (s.length != t.length) {
        return false
    }
    if (s.length == 1) {
        return s == t
    }

    val sMap = mutableMapOf<Char, Int>()
    val tMap = mutableMapOf<Char, Int>()

    for (i in s.indices) {
        sMap[s[i]] = sMap.getOrDefault(s[i], 0) + 1
        tMap[t[i]] = tMap.getOrDefault(t[i], 0) + 1
    }

    return sMap == tMap
}
