<template>
    <div class="flex gap-10 mt-10">
        <aside class="border rounded-md shadow-md p-4 w-96">
            <div class="items-filter-bar">
                <span class="font-semobold text-2xl text-slate-400"> Filter Options </span>
                <div class="mt-4">
                    <h4 class="text-gray-800 mb-2 font-medium">Location</h4>
                    <!-- Location options go here -->
                    <select class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500">
                        <option value="" selected disabled>Select State</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <!-- Add more states here -->
                    </select>
                </div>
                <div class="mt-4">
                    <h4 class="text-gray-800 mb-2 font-medium">Price, ₦</h4>
                    <!-- Price options go here -->
                    <div>
                        <input type="radio" id="price-0-10k" name="price-range" value="0-10k" class="mr-2">
                        <label for="price-0-10k" class="inline-block text-gray-800">0 - 10k</label>
                    </div>
                    <div>
                        <input type="radio" id="price-10k-50k" name="price-range" value="10k-50k" class="mr-2">
                        <label for="price-10k-50k" class="inline-block text-gray-800">10k - 50k</label>
                    </div>
                    <div>
                        <input type="radio" id="price-50k-500k" name="price-range" value="50k-500k" class="mr-2">
                        <label for="price-50k-500k" class="inline-block text-gray-800">50k - 500k</label>
                    </div>
                    <div>
                        <input type="radio" id="price-other" name="price-range" value="other" class="mr-2">
                        <label for="price-other" class="inline-block text-gray-800">Other Prices</label>
                    </div>
                </div>
                <!-- Add more categories as needed -->
            </div>
        </aside>

    <div class="p-4 w-1/2 flex flex-col gap-8">
        <div class="items-details flex flex-col gap-10 shadow p-8">
            <div class="card flex">
                <div class="card-image">
                    <img src="../assets/mobile.png" alt="">
                </div>
                <div class="card-des flex flex-col gap-3">
                    <h4 class="font-bold text-2xl">Item: <span>Iphone 12 ProMax</span></h4>
                    <p>Price: <span>560,000</span></p>
                    <p>Brand: <span>Apple</span></p>
                    <p>Store: <span>Infinity store</span></p>
                    <p>Category: <span>Mobile</span></p>
                    <input type="button" class="bg-blue-950 text-white px-12 p-2 rounded hover:cursor-pointer" value="Show Contact">
                </div>
            </div>
            <div class="other-card-image flex gap-5 ">
                <img src="../assets/mobile.png" class="w-32 hover:shadow" alt="">
                <img src="../assets/mobile.png" class="w-32 hover:shadow" alt="">
                <img src="../assets/mobile.png" class="w-32 hover:shadow" alt="">
                <img src="../assets/mobile.png" class="w-32 hover:shadow" alt="">
                <img src="../assets/mobile.png" class="w-32 hover:shadow" alt="">
            </div>
        </div>
            <textarea class="border border-gray-300 p-4 resize-none focus:outline-none h-80" readonly>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cum exercitationem quis obcaecati natus fugiat consequatur a nesciunt vel totam! Illo totam tenetur, magnam quas ipsam tempora mollitia ex aut fugit? Perspiciatis veritatis rerum ratione accusantium, magni accusamus ipsam quas, dolore in provident a est qui earum, aliquam repellendus similique quia labore quo! Id cum repellatneque.
            </textarea>
    </div>
</div>
</template>