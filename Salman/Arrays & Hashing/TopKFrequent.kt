fun topKFrequent(nums: IntArray, k: Int): IntArray {
      val map = mutableMapOf<Int, Int>()
      for (num in nums) {
          map[num] = map.getOrDefault(num, 0) + 1
      }

      val valuesSorted = map.entries.sortedBy { it.value }
      return valuesSorted.takeLast(k).map { it.key }.toIntArray()
  }
