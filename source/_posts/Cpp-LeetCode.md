---
title: LeetCode-Cpp
copyright: true
visitor: true
comment_count: true
date: 2020-05-31 11:52:52
id: leetcode-cpp
top:
tags: {cpp,leetcode}
categories: Coding
description: 自2020-05-31起，开始刷LeetCode，每日不少于3题（1简单，1中等，1困难）
---

可以正式开始了~

## Day-2020-05-31

### [1431. Kids With the Greatest Number of Candies](https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/)

<font color = green >[easy]</font>

Given the array `candies` and the integer `extraCandies`, where `candies[i]` represents the number of candies that the **ith** kid has.

For each kid check if there is a way to distribute `extraCandies` among the kids such that he or she can have the **greatest** number of candies among them. Notice that multiple kids can have the **greatest** number of candies.

**Example 1:**

```
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
```

**Example 2:**

```
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
```

**Example 3:**

```
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

**Constraints:**

* `2 <= candies.length <= 100`
* `1 <= candies[i] <= 100`
* `1 <= extraCandies <= 50`

#### My Code:

```c++
class Solution
{
public:
	vector<bool> kidsWithCandies(vector<int> &candies, int extraCandies) {
		int len = candies.size();
		vector<bool> result;
		int maxV = *max_element(candies.begin(), candies.end());

		for (int i = 0; i < len; i++) {
			if (candies[i] + extraCandies >= maxV)
				result.push_back(1);
			else
				result.push_back(0); // 指在容器尾端插入"0" [false]
		}
		return result;
	}
};
```

### [0035. Search Insert Position](https://leetcode-cn.com/problems/search-insert-position/)

<font color = green >[easy]</font>

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

**Example 1:**

```
Input: [1,3,5,6], 5
Output: 2
```

**Example 2:**

```
Input: [1,3,5,6], 2
Output: 1
```

**Example 3:**

```
Input: [1,3,5,6], 7
Output: 4
```

**Example 4:**

```
Input: [1,3,5,6], 0
Output: 0
```

#### My Code:

```c++
class Solution {
public:
	int searchInsert(vector<int> &nums, int target) {
		int len = nums.size();
		if (nums[0] > target) return 0;
		if (nums[len - 1] < target) return len;
		int i;
		for (i = 0; i < len; i++) {
			if (target == nums[i])
				break;
			else if (target < nums[i])
				break;
		}
		return i;
	}
};
```

### [0665. Non-decreasing Array](https://leetcode-cn.com/problems/non-decreasing-array/)

<font color = green >[easy]</font>（并不easy...）

Given an array `nums` with `n` integers, your task is to check if it could become non-decreasing by modifying **at most** `1` element.

We define an array is non-decreasing if `nums[i] <= nums``[i + 1]` holds for every `i` (0-based) such that `(0 <= i <= n - 2)`.

**Example 1:**

```
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
```

**Example 2:**

```
Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
```

**Constraints:**

* `1 <= n <= 10 ^ 4`
* `- 10 ^ 5 <= nums[i] <= 10 ^ 5`

#### My Code:

```c++
class Solution {
public:
	bool checkPossibility(vector<int>& nums) {
		int count = 0;

		for (int i = 1; i < nums.size(); i++) {
			if (nums[i - 1] > nums[i]) {
				count++;
				if ((i > 1 && i < nums.size() - 1) && (nums[i + 1] < nums[i - 1] && nums[i-2]>nums[i])) {
					count++;
				}
			}
		}
		if (count <= 1) return true; // return可简化，见下面一段参考代码
		else return false;
	}
};
```

ps：这道题花了好长时间，提交失败了5次，才考虑到所有情况...到最后就比较混乱了。

#### 参考解析：

判断最多改变一个元素的情况下，是否能变成一个非递减序列。
即找到一个元素 （大于其后面的那个元素）
此时有两种情况
1、改变该元素才能成为非递减序列
2、改变该元素后面那个元素才能成为非递减序列
由这两个元素的外围元素大小比较决定

```
若nums[i-2] > nums[i]
令nums[i] = nums[i-1];
否则：nums[i-1] = nums[i];
```

这样对于后面的判断就不会有影响了。

#### 参考代码：

```c++
class Solution 
{
public:
    bool checkPossibility(vector<int>& nums) 
    {
        int count = 0;
        //int tag = nums[0];
        for(int i = 1; i < nums.size(); i++)
        {
            if(nums[i-1] > nums[i])
            {
                if(i-2 >= 0 && nums[i-2] > nums[i])
                    nums[i] = nums[i-1];
                else
                    nums[i-1] = nums[i];
                count++;
            }
        }
        return count <= 1; // 简洁的return
    }
};
```



### [1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode-cn.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)

<font color = orange >[medium]</font>

Given an array of integers `arr` and two integers `k` and `threshold`.

Return *the number of sub-arrays* of size `k` and average greater than or equal to `threshold`.

**Example 1:**

```
Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
```

**Example 2:**

```
Input: arr = [1,1,1,1,1], k = 1, threshold = 0
Output: 5
```

**Example 3:**

```
Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
```

**Example 4:**

```
Input: arr = [7,7,7,7,7,7,7], k = 7, threshold = 7
Output: 1
```

**Example 5:**

```
Input: arr = [4,4,4,4], k = 4, threshold = 1
Output: 1
```

**Constraints:**

* `1 <= arr.length <= 10^5`
* `1 <= arr[i] <= 10^4`
* `1 <= k <= arr.length`
* `0 <= threshold <= 10^4`

#### My Code:

最初尝试：

```c++
class Solution {
public:
	int numOfSubarrays(vector<int>& arr, int k, int threshold) {
		int len = arr.size();
		if (k > len) return -1;

		int count = 0;
		for (int i = 0; i < len - k + 1; i++) {
			int sum = 0;
			for (int j = i; j < i + k; j++) {
				sum += arr[j];
			}
			if (sum / k >= threshold) {
				count++;
			}
		}
		return count;
	}
};
```

时间复杂度为：O(n)，具体时间消耗：k*n，提交后显示 “时间超出限制”。

改进后：

```c++
class Solution {
public:
	int numOfSubarrays(vector<int>& arr, int k, int threshold) {
		int sum = 0;
		int count = 0;
        int len = arr.size();
        
		for (int i = 0; i < k; i++) sum += arr[i];
		if (sum >= threshold*k) count++;
        // 采用先算第一组，然后后面的sum依次减之前一个加最后一个
        // 可省去一个for循环
		for (int i = 0; i < len - k; i++) {
			sum -= arr[i];
			sum += arr[i + k];
			if (sum >= threshold*k) count++;
		}
		return count;
	}
};
```

执行时间：196ms

将判断条件`sum >= threshold*k` 改为 `sum / k >= threshold`，执行时间为320ms。（可见乘法比除法的速度快不少）

### [0015. 3Sum](https://leetcode-cn.com/problems/3sum/)

<font color = orange >[medium]</font>

Given an array `nums` of *n* integers, are there elements *a*, *b*, *c* in `nums` such that *a* + *b* + *c* = 0? Find all unique triplets in the array which gives the sum of zero.

**Note:**

The solution set must not contain duplicate triplets.

**Example:**

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

#### My Code:

初次尝试：（暴力三重循环）

```c++
class Solution {
public:
	vector<vector<int>> threeSum(vector<int>& nums) {
		vector<vector<int>> ans;
		int len = nums.size();
		for (int i = 0; i < len; i++) {
			for (int j = i + 1; j < len; j++) {
				for (int k = j + 1; k < len; k++) {
					if (nums[i] + nums[j] + nums[k] == 0) {
						vector<int> subArr;
						subArr.push_back(nums[i]);
						subArr.push_back(nums[j]);
						subArr.push_back(nums[k]);
						sort(subArr.begin(), subArr.end());
						if (ans.size()==0 ||(ans.size() > 0 && find(ans.begin(), ans.end(), subArr) == ans.end()))
							ans.push_back(subArr);
					}
				}
			}
		}
		return ans;
	}
};
```

超时。

#### 参考解析：

采用指针的方式。固定一个数，用双指针来查找另外两个数。

<div align=center><img src="https://i.loli.net/2020/06/01/TCOVghxBflGPwDK.png" width="80%" height="80%"></div>