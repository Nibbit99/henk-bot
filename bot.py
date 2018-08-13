import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='hb!')

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def greet(ctx):
    await ctx.send("Hello, there!")

bot.run('NDc4MzMxMzQxOTk0MTk3MDMy.DlMZ5w.smUBE6DS67rPMo_Iu6btIdghEQ4')
