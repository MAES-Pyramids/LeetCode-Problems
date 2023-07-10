fun groupAnagrams(strs: Array<String>): List<List<String>> {
      if (strs.size == 1) {
          listOf(listOf(strs[0]))
      }
      val sortedStrs = strs.map { it.sort() } // n^2 lgn
      val list = mutableMapOf<String, List<String>>()

      for (i in sortedStrs.indices) {
          list[sortedStrs[i]] = list.getOrDefault(sortedStrs[i], emptyList()) + strs[i]
      }

      return list.map { it.value }
}

fun String.sort() = toCharArray().run { sort(); joinToString("") }
