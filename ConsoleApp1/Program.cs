using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(OrderWeight("56 65 74 100"));
            Console.WriteLine(OrderWeight("56 65 74 100 99 68 86 180 90"));
            Console.WriteLine(OrderWeight("103 4 123 4444 99 2000"));
            Console.WriteLine(OrderWeight("4 103 310 33 6 24"));
            Console.WriteLine(OrderWeight("2000 10003 11 11"));
            Console.ReadKey();
        }

        public static string OrderWeight(string strng)
        {
            List<string> weights = new List<string>();
            string[] numbers = strng.Split(' ');
            GetWeights(weights, numbers);

            return (strng.Length == 0) ? "" : SortNumbersAccordingToWeight(numbers, weights);
        }

        private static void GetWeights(List<string> weights, string[] numbers)
        {
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
        }

        public static string SortNumbersAccordingToWeight(string[] numbers, List<string> weights)
        {
            SortNumbersDifferentWeight(numbers, weights);
            if(weights.Any(x => x == x))
            {
                SortWeights(weights);
                SortNumbersOfSameWeight(numbers, weights);
            }

            return String.Join(" ", numbers);

        }

        private static void SortNumbersDifferentWeight(string[] numbers, List<string> sortedWeights)
        {
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
        }

        private static void SortWeights(List<string> sortedWeights)
        {
            for (int pass = 0; pass < sortedWeights.Count; pass++)
            {
                for (int j = pass; j < sortedWeights.Count; j++)
                {
                    if (int.Parse(sortedWeights[j]) < int.Parse(sortedWeights[pass]))
                    {
                        string temp = sortedWeights[pass];

                        sortedWeights[pass] = sortedWeights[j];
                        sortedWeights[j] = temp;
                    }
                }
            }
        }

        private static void SortNumbersOfSameWeight(string[] numbers, List<string> sortedWeights)
        {
            for (int pass = 0; pass < sortedWeights.Count; pass++)
            {
                for (int j = pass; j < sortedWeights.Count; j++)
                {
                    if (int.Parse(sortedWeights[j]) == int.Parse(sortedWeights[pass]))
                    {
                        if (numbers[j].Length < numbers[pass].Length)
                        {
                            string temp = numbers[pass];

                            numbers[pass] = numbers[j];
                            numbers[j] = temp;
                        }
                    }
                }
            }
        }
    }
}
