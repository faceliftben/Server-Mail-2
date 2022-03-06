module.exports = {
	name: "de_DE",
	commands: {
		block: {
			name: "block",
			description: "Show or modify blocked user list.",
			listTitle: "Blocked Users",
			infoTitle: "Block Info",
			addSuccess(userID) {
				return `\`Succesfully add "${userID}" to block list.\``;
			},
			removeSuccess(userID) {
				return `\`Succesfully remove "${userID}" from block list.\``;
			}
		},
		close: {
			name: "close",
			description: "Close an active thread.",
			closeTitle: "Thread Closed",
		},
		config: {
			name: "config",
			description: "Show or modify bot configuration.",
			setSuccess(configName, value) {
				return `\`Succesfully set "${configName}" config value to "${value}".\``;
			},
			resetSuccess(configName) {
				return `\`Succesfully reset "${configName}" config value.\``;
			},
			getInfo(configName) {
				const configData = [];
				switch (configName) {
				case "ownerID":
					configData.push("Ein Besitzer dieses Bots kann alle Befehle verwenden.");
					configData.push("**Anforderungen** : \n🔹 Nur Bot-Eigentümer können diesen Wert ändern.\n🔹 Die Eingabe darf nicht leer sein.");
					break;
				case "cooldown":
					configData.push("Cooldown für jeden Befehl (in Sekunden).");
					configData.push("**Anforderungen** : \n🔹 Jede Zahl, die größer oder gleich Null ist.\n🔹 Die Eingabe darf nicht leer sein.");
					break;
				case "maintenance":
					configData.push("Wartungsmodus umschalten.");
					break;
				case "language":
					configData.push("Vom Bot verwendete Standardsprache.");
					configData.push("**Anforderungen** : \n🔹 Beliebiger Sprachname in [Gebietsschema]-Ordnern.\n🔹 Die Eingabe darf nicht leer sein.");
					configData.push("**Hinweise** : \n`- Betrifft nur nicht befehlsausgelöste Aktionen.`");
					break;
				case "mainServerID":
					configData.push("Server, die vom Moderator moderiert werden.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Der Wert muss eine gültige [Server-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jeder Server, der diesen Bot hat.");
					configData.push("🔹 Wert kann gleich sein wie [Thread Server].");
					configData.push("**Hinweis**: Klicken Sie mit der rechten Maustaste auf das Serversymbol oder den Servernamen => `ID kopieren`");
					break;
				case "threadServerID":
					configData.push("Server, auf dem Threadkanäle erstellt werden.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Der Wert muss eine gültige [Server-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jeder Server, der diesen Bot hat.");
					configData.push("🔹 Der Wert kann mit [Hauptserver] identisch sein.");
					configData.push("**Hinweis**: Klicken Sie mit der rechten Maustaste auf das Serversymbol oder den Servernamen => `ID kopieren`.");
					break;
				case "categoryID":
					configData.push("Kategoriekanal, der Threadkanäle enthalten wird.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Wert muss eine gültige [Kanal-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jeder Kategoriekanal, der sich innerhalb des Thread-Servers befindet.");
					configData.push("🔹 Der Wert [Thread-Server] darf nicht leer sein.");
					configData.push("**Hinweis**: Klicken Sie mit der rechten Maustaste auf die Kategorie => `ID kopieren`.");
					configData.push("Um vollständig zu verstehen, was ein Kategoriekanal ist, überprüfen Sie diesen [Link](https://support.discordapp.com/hc/de/articles/115001580171-Channel-Categories-101).");
					configData.push("`p.s. Discord.js behandelt es als Kanal, deshalb verwende ich diesen Begriff auch.`");
					break;
				case "logChannelID":
					configData.push("Kanal, an den Thread-Protokolle gesendet werden.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Wert muss eine gültige [Kanal-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jeder Kanal innerhalb des Thread-Servers.");
					configData.push("🔹 Der Wert [Thread-Server] darf nicht leer sein.");
					configData.push("**Hinweis**: Klicken Sie mit der rechten Maustaste auf den Kanal => `ID kopieren`.");
					break;
				case "adminRoleID":
					configData.push("Rolle mit Administratorberechtigungsstufe.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Wert muss eine gültige [Rollen-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jede Rolle innerhalb des Thread-Servers.");
					configData.push("🔹 Der Wert [Thread-Server] darf nicht leer sein.");
					configData.push("**Hinweis**: Gehen Sie zu `Servereinstellungen` => `Rollen` => `Mehr` => `ID kopieren`.");
					break;
				case "modRoleID":
					configData.push("Role that will have moderator permission level.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Wert muss eine gültige [Rollen-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jede Rolle innerhalb des Thread-Servers.");
					configData.push("🔹 Der Wert [Thread-Server] darf nicht leer sein.");
					configData.push("**Hinweis**: Gehen Sie zu `Servereinstellungen` => `Rollen` => `Mehr` => `ID kopieren`.");
					break;
				case "mentionedRoleID":
					configData.push("Die Rolle, die im neuen Thread erwähnt wird.");
					configData.push("**Anforderungen** :");
					configData.push("🔹 Wert muss eine gültige [Rollen-ID] sein(https://support.discord.com/hc/de/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).");
					configData.push("🔹 Jede Rolle auf dem Thread-Server, einschließlich `@here` und `@everyone`.");
					configData.push("🔹 VWert kann ein Bindestrich '-' sein (niemand erwähnt).");
					configData.push("**Hinweis**: Gehen Sie zu `Servereinstellungen` => `Rollen` => `Mehr` => `ID kopieren`.");
					break;
				case "infoColor":
					configData.push("Farbe, die für alle informationsbezogenen Einbettungen verwendet wird.");
					configData.push("**Anforderungen** : \n🔹 [Hex-Farbcode](https://html-color.codes/) oder [Farbband](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable).");
					break;
				case "sentColor":
					configData.push("Color used for any message sent on threads related embeds.");
					configData.push("**Anforderungen** : \n🔹 [Hex-Farbcode](https://html-color.codes/) oder [Farbband](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable).");
					break;
				case "receivedColor":
					configData.push("Color used for any message received on threads related embeds.");
					configData.push("**Anforderungen** : \n🔹 [Hex-Farbcode](https://html-color.codes/) oder [Farbband](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable).");
					break;
				case "closeColor":
					configData.push("Color used for any message on thread closing related embeds.");
					configData.push("**Anforderungen** : \n🔹 [Hex-Farbcode](https://html-color.codes/) oder [Farbband](https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable).");
					break;
				default:
					configData.push("`Informationen noch nicht verfügbar.`");
					break;
				}
				return configData.join("\n");
			},
		},
		create: {
			name: "create",
			description: "Neues Ticket erstellen.",
			maxThread: "`Maximal aktiver Tickets erreicht, bitte warten Sie, bis einige Tickets geschlossen werden.`",
			duplicate: "`Sie haben bereits ein aktives Ticket.`",
			dmDisabled(title) {
				return `\`"${title}"-Ticket  erfolgreich erstellt.\nBitte aktivieren Sie die Direktnachricht, um fortzufahren.\``;
			},
			newSuccess(title) {
				return `\`"${title}"-Ticket erfolgreich erstellt.\``;
			},
			newThread(locale, threadTitle) {
				return {
					title: "Ticket erstellt",
					userDM: `${threadTitle}\n\`Bitte beschreiben Sie Ihr Problem mit dem Befehl /${locale.commands.reply.name}.\``,
				};
			},
		},
		help: {
			name: "help",
			description: "Befehlsinformationen anzeigen.",
			title: "Befehlsinfo",
			cmdName: "Name",
			cmdID: "Befehls-ID",
			cmdLang: "Sprache",
			cmdLevel: "Benötigtes Level",
			cmdDescription: "Beschreibung",
			cmdUsage: "Verwendung",
		},
		ping: {
			name: "ping",
			description: "Bot-Latenz berechnen.",
			reply(latency, responseTime) {
				return `API-Latenz: ${latency}ms\nAntwortzeit: ${responseTime}ms`;
			},
		},
		reply: {
			name: "reply",
			description: "Antworten Sie auf einen aktives Ticket.",
			contentDescription: "Mit Nachricht antworten.",
			dmDisabled: "`Der Benutzer hat seine Direktnachricht deaktiviert.`",
		},
		tag: {
			name: "tag",
			description: "Gespeicherte Antwort anzeigen oder ändern.",
			listTitle: "Verfügbare Tags",
			addSuccess(tagName) {
				return `\`"${tagName}" erfolgreich zur Tag-Liste hinzugefügt.\``;
			},
			setSuccess(tagName) {
				return `\`Inhalt von "${tagName}" erfolgreich geändert.\``;
			},
			removeSuccess(tagName) {
				return `\`"${tagName}" wurde erfolgreich aus der Tag-Liste entfernt.\``;
			}
		},
		thread: {
			name: "thread",
			description: "Show or modify active threads.",
			infoTitle: "Thread Info",
			listTitle: "Active Threads",
			activeThread: "`That's an active thread channel.`",
			dmDisabled(userID, channelID) {
				return `\`Successfully bind "${userID}" thread to "${channelID}" channel.\nCannot send messages to this user.\``;
			},
			bindSuccess(userID, channelID) {
				return `\`Successfully bind "${userID}" thread to "${channelID}" channel.\``;
			},
		}
	},
	activity: {
		ready: "Ready",
		maintenance: "~ Under Maintenance ~",
		thread(threadCount, maxThreads) {
			return `${threadCount}/${maxThreads} Active threads`;
		},
	},
	anon: {
		name: "anon",
		description: "Hide command operator.",
	},
	cooldown(time) {
		return `Command in cooldown for next ${time}s.`;
	},
	content: {
		name: "content",
		description: "Target content.",
		invalid: "`Target content can't be empty.`",
	},
	errorMsg(error, ownerID) {
		const output = [
			`Ein Fehler ist aufgetreten, bitte wenden Sie sich an Bot-Eigentümer <@${ownerID}>.`,
			`\`\`\`${error.stack}\`\`\``,
		];
		return output.join("\n");
	},
	misc: {
		true: "True",
		default: "Default",
		Owner: "Owner",
		Admin: "Admin",
		Moderator: "Moderator",
		User: "User",
		reason: "Reason",
		channel: "Channel",
		createdAt: "Created At",
		joinedAt: "Joined At",
		roles: "Roles",
		bindTitle: "Thread Bind",
		msgSent: "Message Sent",
		msgReceived: "Message Received",
		noThread: "`No active thread found.`",
		noChannel: "`Can't find your thread channel.`",
		deploySuccess: "`Successfully registered application commands.`",
		maintenance: "`Maintenance mode enabled, command disabled.`",
		noPerm: "`You don't have permission to execute this command.`",
		unknownError: "`An error has occured.`",
		_SeparatorBot: "Bot Config",
		_SeparatorServer: "Server Config",
		_SeparatorColor: "Color Config",
	},
	note: {
		name: "note",
		description: "Operation note.",
	},
	operation: {
		name: "operation",
		description: "Command operation.",
		add: "add",
		bind: "bind",
		guild: "guild",
		info: "info",
		list: "list",
		reset: "reset",
		remove: "remove",
		sent: "sent",
		set: "set",
		view: "view",
	},
	page: {
		name: "page",
		description: "Output page.",
		emptyList: "`List empty.`",
	},
	reason: {
		name: "reason",
		description: "Operation reason.",
		invalid: "`Operation reason can't be empty.`",
	},
	show: {
		name: "show",
		description: "Show operation output in public.",
	},
	target: {
		name: "target",
		description: "Operation target.",
		notFound: "`Can't find that target.`",
		invalid: "`That's an invalid target for this operation.`",
		duplicate: "`That target is already in the database.`",
		all: "all",
		ownerID: "Owner",
		cooldown: "Cooldown",
		maintenance: "Maintenance",
		language: "Language",
		mainServerID: "Main Server",
		threadServerID: "Thread Server",
		categoryID: "Category",
		logChannelID: "Log Channel",
		adminRoleID: "Admin Role",
		modRoleID: "Moderator Role",
		mentionedRoleID: "Mentioned Role",
		infoColor: "Info Color",
		sentColor: "Sent Color",
		receivedColor: "Received Color",
		closeColor: "Close Color",
	},
	title: {
		name: "title",
		description: "Thread title.",
	},
	value: {
		name: "value",
		description: "Target value.",
		invalid: "`That's an invalid value for this target.`",
	},
};
