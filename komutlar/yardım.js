const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`kb!yardım eğlence\` = Eğlence ve Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`!yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`!yardım kullanıcı\` = Kullanıcı Komutlarını Listeler.  `)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence  Komutları')
  .setDescription(`:white_small_square: \`kb!avatarım\` = Avatarınızı Gösterir. \n:white_small_square: \`kb!ara155\` = Polisi Arar. \n:white_small_square: \`kb!ascii\` = Ascii olarak yazarsınız. \n:white_small_square: \`kb!herkesebendençay\` = Herkese Çay Ismarlarsınız. \n:white_small_square: \`kb!çayiç\` = Çay İçersiniz. \n:white_small_square: \`kb!çayaşekerat\` = Çaya Şeker Atarsınız. \n:white_small_square: \`kb!yumruk-at\` = Yumruk Atarsınız. \n:white_small_square: \`kb!wwegif\` = WWE Gifi Atar. \n:white_small_square: \`kb!stresçarkı\` = Stres Çarkı Çevirirsin. \n:white_small_square: \`kb!çekiç\` = İstediginiz Kişiye Çekiç Atarsınız. \n:white_small_square: \`kb!koş\` = Koşarsınız. \n:white_small_square: \`kb!yazı-tura\` = Yazı Tura Oynarsınız.  \n:white_small_square: \`kb!simit\` = Simit Yersiniz.   \n:white_small_square: \`kb!ping\` = Botun Pingini Gösterir. \n:white_small_square: \`kb!fbi\` = FBI Gifi Atar. \n:white_small_square: \`kb!wasted\` = Profilinize Wasted Efekti Ekler. \n:white_small_square: \`kb!söv\` = Söver.  `)
  message.channel.send(embed)
  }
  if (arg === 'moderasyon' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon Komutları:')
      .setDescription(` :white_small_square: \`!otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`!sayaç-ayarla\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`!ban\` = İstediginiz Kişiyi Banlar. \n:white_small_square: \`!unban\` = İstediğiniz Kişini Banını  Açar. \n:white_small_square: \c!küfür-engelle [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \c!link-engelle [aç-kapat]\` = Link Paylaşılmasını Engeller.  \n:white_small_square: \`!oylama\` = Oylama Yapar. \n:white_small_square: \`!slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`!temizle\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`!çekiliş\` = Çekiliş Yaparsınız. \n:white_small_square: \`!sustur\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz. \n:white_small_square: \`!kayıt-sistemi\` = Kayıt Sistemini Atar. `)
      return message.channel.send(embed);
}
   if (arg === 'kullanıcı' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Kullanıcı Komutları:')
      .setDescription(`:white_small_square: \`!yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız. \n:white_small_square: \`!sunucuresmi\` = Sunucu Resmini Atar. \n:white_small_square: \`!nsfw-gif\` = Nsfw Gifi Atar. \n:white_small_square: \`!yetkilerim\` = Yetkilerinizi Gösterir. \n:white_small_square: \`!kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`c!ping\` = Botun Pingini Gösterir.  \n:white_small_square: \`!sunucubilgi\` = Sunucu Hakkında Bilgi Verir. \n:white_small_square: \`!afk [sebep]\` = AFK Olursunuz. `)   
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
