import tkinter as tk
import tkinter.messagebox
from tkinter import ttk
from PIL import Image, ImageTk

root = tk.Tk()
root.geometry("500x350")
root.title("Tytuł")
root.resizable(False, False)

container = tk.Frame(root)
container.pack(fill=tk.BOTH, expand=tk.YES)

radio = tk.DoubleVar()

label_text = tk.StringVar()
label_text.set(0)


def update_price():
    label_text.set(radio.get())


label_frame1 = ttk.LabelFrame(container, text="Paczka", padding="40 10")
label_frame1.pack(side=tk.LEFT, anchor=tk.N)

radio1 = ttk.Radiobutton(label_frame1, text="list", value=1.0, variable=radio, command=update_price())
radio1.grid(row=0, column=0, sticky="w")

radio2 = ttk.Radiobutton(label_frame1, text="pocztowka", value=1.5, variable=radio, command=update_price())
radio2.grid(row=1, column=0, sticky="w")

radio3 = ttk.Radiobutton(label_frame1, text="paczka", value=10.0, variable=radio, command=update_price())
radio3.grid(row=2, column=0, sticky="w")

label_frame2 = ttk.LabelFrame(container, text="Adres Zamieszkania", padding="40 10")
label_frame2.pack(side=tk.RIGHT, anchor=tk.N)

image = Image.open("pup.png")
image = image.resize((200, 100))
photo = ImageTk.PhotoImage(image)

label = tk.Label(root, image=photo)
label.place(x=0, y=140)

label1 = ttk.Label(label_frame2, text="Ulica")
label1.pack()
input1 = ttk.Entry(label_frame2, text="Ulica")
input1.pack()

label2 = ttk.Label(label_frame2, text="Kod pocztowy")
label2.pack()
input2 = ttk.Entry(label_frame2, text="Kod pocztowy")
input2.pack()

label3 = ttk.Label(label_frame2, text="Miasto")
label3.pack()
input3 = ttk.Entry(label_frame2, text="Miasto")
input3.pack()


def change_label_text():
    label_text.set(radio.get())


def check_input():
    inputt = input2.get()
    if inputt.isdigit() and len(inputt) == 5:
        tkinter.messagebox.showinfo("OK", "POPRAWNY KOD")
    else:
        tkinter.messagebox.showerror("ERROR", "NIEPOPRAWNY KOD")


label5 = ttk.Label(root, textvariable=label_text)
label5.place(x=260, y=200)

label4 = ttk.Label(root, text="CENA: ")
label4.place(x=220, y=200)

button5 = ttk.Button(root, text="Zatwierdz", command=lambda: check_input())
button5.pack(side=tk.BOTTOM, anchor=tk.S)

button5 = ttk.Button(root, text="Sprawdz cene", command=change_label_text)
button5.place(x=130, y=260)

root.mainloop()