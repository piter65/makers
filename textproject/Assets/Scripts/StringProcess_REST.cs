using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class StringProcess_REST : MonoBehaviour
{
	public InputField input_command;

	private IEnumerator GetReplyFromAI(string command)
	{
		string url = @"http://localhost/ai/?text=" + command;
		using (WWW www = new WWW(url))
		{
			yield return www;
			string reply = www.text;

			Debug.LogFormat("Reply: {0}", reply);
		}
	}

	public void OnSubmit()
	{
		string command = input_command.text.Trim();
		Debug.LogFormat("Player Command: {0}", command);

		// Get a reply from the AI server.
		StartCoroutine(GetReplyFromAI(command));

		// Refocus input field for ease of rapid command input.
		input_command.Select();
	}
}
