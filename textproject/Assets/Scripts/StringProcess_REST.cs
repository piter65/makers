using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.Networking;
using Newtonsoft.Json.Linq;

public class StringProcess_REST : MonoBehaviour
{
	public InputField input_text;

	private IEnumerator GetReplyFromAI(string strValue)
	{
		string strURL = @"http://localhost/ai/?text=" + strValue;
		//string strURL = @"http://54.202.22.196/ai/?text=" + strValue;
		
		using (UnityWebRequest www = UnityWebRequest.Get(strURL))
        {
            yield return www.SendWebRequest();

            if (www.isNetworkError || www.isHttpError)
            {
                Debug.LogErrorFormat("ERROR - NETWORK: {0}", www.error);
            }
            else
			{
				// Get JSON response
				string json = www.downloadHandler.text;

				Debug.LogFormat("JSON: {0}", json);

				JObject jobj_root = JObject.Parse(json);
				if (jobj_root["success"].Value<bool>())
				{
					Debug.LogFormat("Reply: {0}", jobj_root["text"].Value<string>());
				}
				else
				{
					Debug.LogErrorFormat("ERROR - SERVER: {0}", jobj_root["error"].Value<string>());
				}
			}
        }
	}

	public void OnSubmit()
	{
		string strValue = input_text.text.Trim();
		Debug.LogFormat("Player Text: {0}", strValue);

		// Get a reply from the AI server.
		StartCoroutine(GetReplyFromAI(strValue));

		// Refocus input field for ease of rapid command input.
		input_text.Select();
	}
}
