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
            //Console.WriteLine(OrderWeight("56 74 100"));
            //Console.WriteLine(OrderWeight("56 65 74 100 99 68 86 180 90"));
            //Console.WriteLine(OrderWeight("103 4 123 4444 99 2000"));
            //Console.WriteLine(OrderWeight("4 103 310 33 6 24"));
            Console.WriteLine(OrderWeight("2000 11 1003 11 9999 22 123"));
            Console.ReadKey();
        }

        public static string OrderWeight(string strng)
        {
            string[] numbers = strng.Split(' ');
            string[] weights = new string[numbers.Length];
            GetWeights(weights, numbers);

            return (strng.Length == 0) ? "" : SortNumbersAccordingToWeight(numbers, weights);
        }

        private static void GetWeights(string[] weights, string[] numbers)
        {
            for(int i = 0; i < numbers.Length; i++)
            {
                int lengthOfNuber = numbers[i].Length;
                int sum = 0;
                for (int j = 0; j < lengthOfNuber; j++)
                {
                    sum += int.Parse(numbers[i][j].ToString());
                }
                weights[i] = sum.ToString();
            }
        }

        public static string SortNumbersAccordingToWeight(string[] numbers, string[] weights)
        {
            SortNumbersOfSameWeight(numbers, weights);
            SortNumbersDifferentWeight(numbers, weights);

            return String.Join(" ", numbers);

        }

        private static void SortNumbersDifferentWeight(string[] numbers, string[] weights)
        {
            for (int pass = 0; pass < weights.Length; pass++)
            {
                for (int j = pass; j < weights.Length; j++)
                {
                    if (int.Parse(weights[pass]) > int.Parse(weights[j]))
                    {
                        Swap(numbers, pass, j);
                    }
                }
            }
        }

        private static void SortNumbersOfSameWeight(string[] numbers, string[] weights)
        {
            for (int pass = 0; pass < weights.Length; pass++)
            {
                for (int j = pass; j < weights.Length; j++)
                {
                    if (int.Parse(weights[j]) == int.Parse(weights[pass]))
                    {
                        if (numbers[j].Length < numbers[pass].Length && IsNumberJBiggerThanNumberPass(numbers[j], numbers[pass]))
                        {
                            Swap(numbers, pass, j);
                        }
                        else if(int.Parse(numbers[pass]) > int.Parse(numbers[j]))
                        {
                            Swap(numbers, pass, j);
                        }

                    }
                }
            }
        }

        private static bool IsNumberJBiggerThanNumberPass(string later, string earlier)
        {
            for(int i = 0; i < later.Length; i++)
            {
                if(earlier[i] > later[i])
                {
                    return true;
                }
            }

            return false;
        }

        private static void Swap(string[] arraySwapExecutedOn, int earlier, int later)
        {
            string temp = arraySwapExecutedOn[earlier];

            arraySwapExecutedOn[earlier] = arraySwapExecutedOn[later];
            arraySwapExecutedOn[later] = temp;
        }
    }
}
