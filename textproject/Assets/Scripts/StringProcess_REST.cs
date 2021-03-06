﻿using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using UnityEngine.Networking;
using Newtonsoft.Json.Linq;

public class StringProcess_REST : MonoBehaviour
{
	public InputField input_text;
	public string id_session = null;

	//private const string serverURL = @"http://localhost";
	private const string serverURL = @"http://54.202.22.196";

	private IEnumerator Start()
	{
		Logger.Log("Requesting Session Start...");

		// Get a new session ID.
		string strURL = serverURL + @"/ai/start-session";
		using (UnityWebRequest www = UnityWebRequest.Get(strURL))
		{
			yield return www.SendWebRequest();

			if (www.isNetworkError || www.isHttpError)
			{
				Logger.LogError("ERROR - NETWORK: {0}", www.error);
			}
			else
			{
				id_session = www.downloadHandler.text;

				Logger.Log("Session Started. ID: {0}", id_session);
			}
		}
	}

	private IEnumerator GetReplyFromAI(string strValue)
	{
		string strURL = serverURL + @"/ai/?id_session=" + id_session + "&text=" + strValue;

		using (UnityWebRequest www = UnityWebRequest.Get(strURL))
        {
            yield return www.SendWebRequest();

            if (www.isNetworkError || www.isHttpError)
            {
                Logger.LogError("ERROR - NETWORK: {0}", www.error);
            }
            else
			{
				// Get JSON response
				string json = www.downloadHandler.text;

				Logger.Log("JSON: {0}", json);

				JObject jobj_root = JObject.Parse(json);
				if (jobj_root["success"].Value<bool>())
				{
					Logger.Log("Reply: {0}", jobj_root["reply"].Value<string>());
				}
				else
				{
					Logger.LogError("ERROR - SERVER: {0}", jobj_root["error"].Value<string>());
				}
			}
        }
	}

	public void OnSubmit()
	{
		string strValue = input_text.text.Trim();
		Logger.Log("Player Text: {0}", strValue);

		// Get a reply from the AI server.
		StartCoroutine(GetReplyFromAI(strValue));

		// Refocus input field for ease of rapid command input.
		input_text.Select();
	}
}
