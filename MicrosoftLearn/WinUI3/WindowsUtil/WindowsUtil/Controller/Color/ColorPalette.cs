using Microsoft.UI;
using Microsoft.UI;
using Microsoft.UI.Xaml.Media;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WindowsUtil.Model;

namespace WindowsUtil.Controller.Color
{
    public static class ColorPalette
    {
        public static List<ColorPaletteColor> Colors { get; } = new List<ColorPaletteColor>
        {
            new ColorPaletteColor { Name = "Black", Brush = new SolidColorBrush(Microsoft.UI.Colors.Black)},
            new ColorPaletteColor { Name = "Green", Brush = new SolidColorBrush(Microsoft.UI.Colors.Green)},
            new ColorPaletteColor { Name = "GreenYellow", Brush = new SolidColorBrush(Microsoft.UI.Colors.GreenYellow)},
            new ColorPaletteColor { Name = "Violet", Brush = new SolidColorBrush(Microsoft.UI.Colors.Violet)},
            new ColorPaletteColor { Name = "AliceBlue", Brush = new SolidColorBrush(Microsoft.UI.Colors.AliceBlue)},
            new ColorPaletteColor { Name = "Blue", Brush = new SolidColorBrush(Microsoft.UI.Colors.Blue)},
            new ColorPaletteColor { Name = "Black", Brush = new SolidColorBrush(Microsoft.UI.Colors.DarkBlue)},
            new ColorPaletteColor { Name = "Green", Brush = new SolidColorBrush(Microsoft.UI.Colors.Wheat)},
            new ColorPaletteColor { Name = "GreenYellow", Brush = new SolidColorBrush(Microsoft.UI.Colors.White)},
            new ColorPaletteColor { Name = "Gray", Brush = new SolidColorBrush(Microsoft.UI.Colors.Gray)},

        };
    }
}
