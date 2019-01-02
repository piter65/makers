using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Wrapper for 'Debug.Log()' functions that also displays logs to UI Text component.
public class Logger : MonoBehaviour
{
	private static Logger _instance;

	private Text _txt_display;

	void Start()
	{
		_instance = this;

		_txt_display = GetComponent<Text>();
	}

	private void OnDestroy()
	{
		if (_instance == this)
			_instance = null;
	}

	public static void Log(string text, params object[] args)
	{
		if (_instance)
		{
			_instance._txt_display.color = Color.white;
			_instance._txt_display.text = string.Format(text, args);
		}

		Debug.LogFormat(text, args);
	}

	public static void LogWarning(string text, params object[] args)
	{
		if (_instance)
		{
			_instance._txt_display.color = Color.yellow;
			_instance._txt_display.text = string.Format(text, args);
		}

		Debug.LogWarningFormat(text, args);
	}

	public static void LogError(string text, params object[] args)
	{
		if (_instance)
		{
			_instance._txt_display.color = Color.red;
			_instance._txt_display.text = string.Format(text, args);
		}

		Debug.LogErrorFormat(text, args);
	}
}
