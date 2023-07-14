    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        val frequency = mutableMapOf<Int, List<Int>>() // key = frequency, value = nums with the frequency
        val numCount = mutableMapOf<Int, Int>() //  key = num, value = frequency

        nums.forEach {
            numCount[it] = numCount.getOrDefault(it, 0) + 1
        }

        numCount.forEach { (key, value) ->
            frequency[value] = frequency.getOrDefault(value, emptyList()) + key
        }

        var maxFrequency = frequency.getMaxFrequency().first // k = 2, 1 1 1 2 2 2 3 3 3 4 5 6
        val result = hashSetOf<Int>()

        while (maxFrequency >= 0) {
            if (result.size >= k) {
                break
            }
            frequency[maxFrequency]?.let { result.addAll(it) }
            maxFrequency--
        }


        return result.toIntArray() 
    }

    fun Map<Int, List<Int>>.getMaxFrequency(): Pair<Int, List<Int>> {
        var max = Int.MIN_VALUE
        var key: Int? = null
        forEach { (t, u) ->
            if (t > max) {
                key = t
                max = t
            }
        }
        val res = if (key == null) 0 to this[0]!! else key!! to this[key!!]!!
        return res
    }
