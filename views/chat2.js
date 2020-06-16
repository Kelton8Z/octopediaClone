<script src="https://cdn.botframework.com/botframework-webchat/latest/botchat.js"></script>
    <script>
      BotChat.App({
        directLine: { secret: direct_line_secret },
        user: { id: 'userid' },
        bot: { id: 'botid' },
        resize: 'detect'
      }, document.getElementById("bot"));
    </script>