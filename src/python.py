import os

e = os.listdir("../public/assets")

for er in e:

    try:
        print('[')
        f = os.listdir("../public/assets/"+er)
        for fr in f:
            print('"'+fr+'",')
        print(']')

        print('\n')
    except:
        None