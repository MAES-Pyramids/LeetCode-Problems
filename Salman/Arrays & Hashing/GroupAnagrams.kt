fun groupAnagrams(strs: Array<String>): List<List<String>> {
      if (strs.size == 1) {
          listOf(listOf(strs[0]))
      }
      val sortedStrs = strs.map { it.sort() } // n * m lgm
      val map = mutableMapOf<String, List<String>>()

      for (i in sortedStrs.indices) {
          map[sortedStrs[i]] = map.getOrDefault(sortedStrs[i], emptyList()) + strs[i]
      }

      return list.map { it.value }
}

fun String.sort() = toCharArray().run { sort(); joinToString("") }
