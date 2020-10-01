using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(OrderWeight("103 123 4444 99 2000"));
            Console.ReadKey();
        }

        public static string OrderWeight(string strng)
        {
            List<string> weights = new List<string>();
            string[] numbers = strng.Split(' ');
            foreach (string number in numbers)
            {
                int lengthOfNuber = number.Length;
                int sum = 0;
                for (int i = 0; i < lengthOfNuber; i++)
                {
                    sum += int.Parse(number[i].ToString());
                }
                weights.Add(sum.ToString());
            }

            return (strng.Length == 0) ? "" : SortNumbersAccordingToWeight(numbers, weights);
        }

        public static string SortNumbersAccordingToWeight(string[] numbers, List<string> weights)
        {
            List<string> sortedWeights = new List<string>();

            for (int i = 0; i < numbers.Length; i++)
            {
                sortedWeights.Add(weights[i]);
            }
            for (int pass = 0; pass < sortedWeights.Count; pass++)
            {
                for (int j = pass; j < sortedWeights.Count; j++)
                {
                    if (int.Parse(sortedWeights[j]) < int.Parse(sortedWeights[pass]))
                    {
                        string temp = numbers[pass];

                        numbers[pass] = numbers[j];
                        numbers[j] = temp;

                    }
                }
            }

            return String.Join(" ", numbers);

        }
    }
}
