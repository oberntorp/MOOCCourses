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
using static System.Net.WebRequestMethods;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace MyFirstApp
{
    /// <summary>
    /// An empty window that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainWindow : Window
    {
        private string HttpSendButtonDefaultText = "Send Http Request";
        private string HttpSendButtonSendingText = "Sending request...";
        public MainWindow()
        {
            this.InitializeComponent();
        }

        private void myButton_Click(object sender, RoutedEventArgs e)
        {
            TextBlockError.Text = string.Empty;
            TextBlockError.Visibility = Visibility.Collapsed;
            TextBlockRequestResult.Text = string.Empty;
            TextBlockUrl.Text = string.Empty;

        }

        private async void ButtonSendRequest_Click(object sender, RoutedEventArgs e)
        {
            TextBlockError.Text = "";
            TextBlockError.Visibility = Visibility.Collapsed;
            ButtonSendRequest.IsEnabled = false;
            ButtonSendRequest.Content = HttpSendButtonSendingText;
            string requestUri = TextBlockUrl.Text;
            if(requestUri == string.Empty)
            {
                TextBlockError.Text = "Please enter a uri.";
                TextBlockError.Visibility = Visibility.Visible;
            }

            string responst = await SendHttpRequest(requestUri);

            TextBlockRequestResult.Text = responst;

            ButtonSendRequest.IsEnabled = true;
            ButtonSendRequest.Content = HttpSendButtonDefaultText;

        }

        private async Task<string> SendHttpRequest(string requestUri)
        {
            try
            {
            HttpClient client = new HttpClient();
            return await client.GetStringAsync(requestUri);
            }
            catch(Exception ex)
            {
                TextBlockError.Text = $"An error occured: {ex.Message}";
            }
            return null;
        }

        private void MenuFlyoutItem_Click(object sender, RoutedEventArgs e)
        {
            AboutWindow aboutWindow = new AboutWindow();
            aboutWindow.Activate();
        }
    }
}
