fun twoSum(nums: IntArray, target: Int): IntArray {
    val map = mutableMapOf<Int, Int?>()
    nums.forEachIndexed { index, int ->
        map[int] = index
    }
      
    for (i in nums.indices) {
        val remaining = target - nums[i]
        if (map[remaining] == i) {
            continue
        }
        if (map[remaining] != null) {
            return intArrayOf(i, map[remaining]!!)
        }
    }

    return intArrayOf(-1)
}
