﻿//using System.Collections;
//using System.Collections.Generic;
//using UnityEngine;
//using UnityEngine.UI;
//using SocketIOClient;

using UnityEngine;
using System.Collections;
using System.Net.Sockets;
using System.IO;
using System;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System.Globalization;
using UnityEngine.AI;

public class StringProcess_Sockets : MonoBehaviour
{

	public InputField nameField;
	private string charName;

	// variables from example peter stole....
	private string clientName;
	private int portToConnect = 2013;
	//   private string serverName="76.218.105.191";
	private string serverName = "localhost";

	private string password;
	public bool socketReady;
	private TcpClient socket;
	private NetworkStream stream;
	private StreamWriter writer;
	private StreamReader reader;

	public int justsent = 0;

	// Use this for initialization
	void Start()
	{

// Peter does not understand this lines.     keeping for voodoo
		DontDestroyOnLoad(gameObject);
		ConnectToServer();
	}


	public bool ConnectToServer(string host, int port)
	{
		if (socketReady)
			return false;

		try
		{
			socket = new TcpClient(host, port);
			stream = socket.GetStream();
			writer = new StreamWriter(stream);
			reader = new StreamReader(stream);

			socketReady = true;
			Debug.Log("Socket Success ");
			
			//// Read any initial logs.
			//Read(0.0f);
		}
		catch (Exception e)
		{
			Debug.Log("Socket error " + e.Message);
		}

		return socketReady;
	}

	public void OnSubmit()
	{
		charName = nameField.text;
		Debug.Log("Player typed:" + charName);

		// Sending message to the server
		Send(charName);

		//// Wait half a second and then read the server logs.
		//Read(0.5f);
	}

	//private void Read(float interval)
	//{
	//	if (socketReady)
	//	{
	//		// peter is frustrated.   We need to trigger Unity to dump it's data.
	//		// writer.Flush();   // try again

	//		if (stream.DataAvailable)
	//		{
	//			StartCoroutine(ReadLoop(interval));
	//		}
	//	}
	//}



	//private IEnumerator ReadLoop(float interval)
	//{
	//	yield return new WaitForSeconds(interval);

	//	string data = reader.ReadLine();
	//	//string data = reader.ReadToEnd();
	//	if (!string.IsNullOrEmpty(data))
	//	{
	//		Debug.Log("Server_Response:'" + data + "'");

	//		// Read unitl we're caught up.
	//		StartCoroutine(ReadLoop(0.0f));
	//	}
	//}

	void Update()
	{
		if (socketReady)
		{
			// peter is frustrated.   We need to trigger Unity to dump it's data.
			// writer.Flush();   // try again


			if (stream.DataAvailable)
			{
				string data = reader.ReadLine();
				//string data = reader.ReadToEnd();
				if (!string.IsNullOrEmpty(data))
				{
					Debug.Log("Server_Response:'" + data + "'");
				}
			}
		}
	}

	private void CloseSocket()
	{
		if (!socketReady)
			return;

		writer.Close();
		reader.Close();
		socket.Close();
		socketReady = false;
	}


	public void ConnectToServer()
	{
		CloseSocket();
		try
		{
			ConnectToServer(serverName, portToConnect);
			Debug.Log("connect worked to:" + serverName + ":" + portToConnect);
		}
		catch (Exception e)
		{
			Debug.Log(e.Message);
		}
	}


	// Sending message to the server
	public void Send(string data)
	{
		if (!socketReady)
			return;

		writer.WriteLine(data);
		writer.Flush();

	}

}
