using Microsoft.UI.Xaml.Controls;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WindowsUtil.Controller.Color;

namespace WindowsUtil.Model
{
    public class Colors
    {
        public ObservableCollection<ColorPaletteColor> AvailableColors {get;}
        public ColorPicker SelectedColor { get; set; }

        public Colors()
        {
            AvailableColors = new ObservableCollection<ColorPaletteColor>(ColorPalette.Colors);
        }
    }
}
