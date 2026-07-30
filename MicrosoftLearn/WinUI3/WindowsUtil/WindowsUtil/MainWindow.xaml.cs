using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Windows.Foundation;
using Windows.Foundation.Collections;
using WindowsUtil.View;
using static System.Net.WebRequestMethods;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace WindowsUtil
{
    /// <summary>
    /// An empty window that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainWindow : Window
    {
        public MainWindow()
        {
            this.InitializeComponent();
        }

        private void MenuButton_HTMLViewer_Click(object sender, RoutedEventArgs e)
        {
            HTMLViewerWindow htmlViewerWindow = new HTMLViewerWindow();
            htmlViewerWindow.Activate();
        }

        private void MenuButton_MQTT_Click(object sender, RoutedEventArgs e)
        {
            MQTTWindow htmlViewerWindow = new MQTTWindow();
            htmlViewerWindow.Activate();
        }

        private void MenuButton_ColorPicker_Click(object sender, RoutedEventArgs e)
        {
            ColorPickerWindow colorPickerWindow = new ColorPickerWindow();
            colorPickerWindow.Activate();
        }

        private void MenuButton_About_Click(object sender, RoutedEventArgs e)
        {
            AboutWindow aboutWindow = new AboutWindow();
            aboutWindow.Activate();
        }
    }
}
